package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteForecastExportJobXAmzTargetEnum string

const (
	DeleteForecastExportJobXAmzTargetEnumAmazonForecastDeleteForecastExportJob DeleteForecastExportJobXAmzTargetEnum = "AmazonForecast.DeleteForecastExportJob"
)

type DeleteForecastExportJobHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteForecastExportJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteForecastExportJobRequest struct {
	Headers DeleteForecastExportJobHeaders
	Request shared.DeleteForecastExportJobRequest `request:"mediaType=application/json"`
}

type DeleteForecastExportJobResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
