package operations

import (
	"openapi/pkg/models/shared"
)

type CreateForecastXAmzTargetEnum string

const (
	CreateForecastXAmzTargetEnumAmazonForecastCreateForecast CreateForecastXAmzTargetEnum = "AmazonForecast.CreateForecast"
)

type CreateForecastHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateForecastXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateForecastRequest struct {
	Headers CreateForecastHeaders
	Request shared.CreateForecastRequest `request:"mediaType=application/json"`
}

type CreateForecastResponse struct {
	ContentType                    string
	CreateForecastResponse         *shared.CreateForecastResponse
	InvalidInputException          *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceInUseException         *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
