package operations

import (
	"openapi/pkg/models/shared"
)

type StopResourceXAmzTargetEnum string

const (
	StopResourceXAmzTargetEnumAmazonForecastStopResource StopResourceXAmzTargetEnum = "AmazonForecast.StopResource"
)

type StopResourceHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopResourceRequest struct {
	Headers StopResourceHeaders
	Request shared.StopResourceRequest `request:"mediaType=application/json"`
}

type StopResourceResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
