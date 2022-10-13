package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePredictorBacktestExportJobXAmzTargetEnum string

const (
	CreatePredictorBacktestExportJobXAmzTargetEnumAmazonForecastCreatePredictorBacktestExportJob CreatePredictorBacktestExportJobXAmzTargetEnum = "AmazonForecast.CreatePredictorBacktestExportJob"
)

type CreatePredictorBacktestExportJobHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePredictorBacktestExportJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreatePredictorBacktestExportJobRequest struct {
	Headers CreatePredictorBacktestExportJobHeaders
	Request shared.CreatePredictorBacktestExportJobRequest `request:"mediaType=application/json"`
}

type CreatePredictorBacktestExportJobResponse struct {
	ContentType                              string
	CreatePredictorBacktestExportJobResponse *shared.CreatePredictorBacktestExportJobResponse
	InvalidInputException                    *interface{}
	LimitExceededException                   *interface{}
	ResourceAlreadyExistsException           *interface{}
	ResourceInUseException                   *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
}
