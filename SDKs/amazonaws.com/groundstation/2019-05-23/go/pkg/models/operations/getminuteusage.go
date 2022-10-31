package operations

import (
	"openapi/pkg/models/shared"
)

type GetMinuteUsageHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
