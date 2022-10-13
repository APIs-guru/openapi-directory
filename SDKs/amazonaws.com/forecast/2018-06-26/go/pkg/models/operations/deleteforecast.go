package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteForecastXAmzTargetEnum string

const (
	DeleteForecastXAmzTargetEnumAmazonForecastDeleteForecast DeleteForecastXAmzTargetEnum = "AmazonForecast.DeleteForecast"
)

type DeleteForecastHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteForecastXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteForecastRequest struct {
	Headers DeleteForecastHeaders
	Request shared.DeleteForecastRequest `request:"mediaType=application/json"`
}

type DeleteForecastResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
