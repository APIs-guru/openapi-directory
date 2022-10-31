package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteForecastXAmzTargetEnum string

const (
	DeleteForecastXAmzTargetEnumAmazonForecastDeleteForecast DeleteForecastXAmzTargetEnum = "AmazonForecast.DeleteForecast"
)

type DeleteForecastHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteForecastXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
