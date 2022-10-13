package operations

import (
	"openapi/pkg/models/shared"
)

type QueryForecastXAmzTargetEnum string

const (
	QueryForecastXAmzTargetEnumAmazonForecastRuntimeQueryForecast QueryForecastXAmzTargetEnum = "AmazonForecastRuntime.QueryForecast"
)

type QueryForecastHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        QueryForecastXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type QueryForecastRequest struct {
	Headers QueryForecastHeaders
	Request shared.QueryForecastRequest `request:"mediaType=application/json"`
}

type QueryForecastResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	InvalidNextTokenException *interface{}
	LimitExceededException    *interface{}
	QueryForecastResponse     *shared.QueryForecastResponse
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
