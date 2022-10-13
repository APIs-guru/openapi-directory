package operations

import (
	"openapi/pkg/models/shared"
)

type CreateForecastExportJobXAmzTargetEnum string

const (
	CreateForecastExportJobXAmzTargetEnumAmazonForecastCreateForecastExportJob CreateForecastExportJobXAmzTargetEnum = "AmazonForecast.CreateForecastExportJob"
)

type CreateForecastExportJobHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateForecastExportJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateForecastExportJobRequest struct {
	Headers CreateForecastExportJobHeaders
	Request shared.CreateForecastExportJobRequest `request:"mediaType=application/json"`
}

type CreateForecastExportJobResponse struct {
	ContentType                     string
	CreateForecastExportJobResponse *shared.CreateForecastExportJobResponse
	InvalidInputException           *interface{}
	LimitExceededException          *interface{}
	ResourceAlreadyExistsException  *interface{}
	ResourceInUseException          *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
