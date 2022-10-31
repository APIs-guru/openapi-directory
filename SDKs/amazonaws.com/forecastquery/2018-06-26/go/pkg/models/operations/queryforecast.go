package operations

import (
	"openapi/pkg/models/shared"
)

type QueryForecastXAmzTargetEnum string

const (
	QueryForecastXAmzTargetEnumAmazonForecastRuntimeQueryForecast QueryForecastXAmzTargetEnum = "AmazonForecastRuntime.QueryForecast"
)

type QueryForecastHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        QueryForecastXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
