package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePredictorBacktestExportJobXAmzTargetEnum string

const (
	DescribePredictorBacktestExportJobXAmzTargetEnumAmazonForecastDescribePredictorBacktestExportJob DescribePredictorBacktestExportJobXAmzTargetEnum = "AmazonForecast.DescribePredictorBacktestExportJob"
)

type DescribePredictorBacktestExportJobHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePredictorBacktestExportJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribePredictorBacktestExportJobRequest struct {
	Headers DescribePredictorBacktestExportJobHeaders
	Request shared.DescribePredictorBacktestExportJobRequest `request:"mediaType=application/json"`
}

type DescribePredictorBacktestExportJobResponse struct {
	ContentType                                string
	DescribePredictorBacktestExportJobResponse *shared.DescribePredictorBacktestExportJobResponse
	InvalidInputException                      *interface{}
	ResourceNotFoundException                  *interface{}
	StatusCode                                 int64
}
