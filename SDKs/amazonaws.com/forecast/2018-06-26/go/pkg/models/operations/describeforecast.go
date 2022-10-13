package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeForecastXAmzTargetEnum string

const (
	DescribeForecastXAmzTargetEnumAmazonForecastDescribeForecast DescribeForecastXAmzTargetEnum = "AmazonForecast.DescribeForecast"
)

type DescribeForecastHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeForecastXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeForecastRequest struct {
	Headers DescribeForecastHeaders
	Request shared.DescribeForecastRequest `request:"mediaType=application/json"`
}

type DescribeForecastResponse struct {
	ContentType               string
	DescribeForecastResponse  *shared.DescribeForecastResponse
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
