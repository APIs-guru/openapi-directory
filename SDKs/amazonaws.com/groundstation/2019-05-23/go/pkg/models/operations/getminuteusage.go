package operations

import (
	"openapi/pkg/models/shared"
)

type GetMinuteUsageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetMinuteUsageRequestBody struct {
	Month int64 `json:"month"`
	Year  int64 `json:"year"`
}

type GetMinuteUsageRequest struct {
	Headers GetMinuteUsageHeaders
	Request GetMinuteUsageRequestBody `request:"mediaType=application/json"`
}

type GetMinuteUsageResponse struct {
	ContentType               string
	DependencyException       *interface{}
	GetMinuteUsageResponse    *shared.GetMinuteUsageResponse
	InvalidParameterException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
