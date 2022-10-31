package operations

import (
	"openapi/pkg/models/shared"
)

type GetBackendPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type GetBackendHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetBackendRequestBody struct {
	BackendEnvironmentName *string `json:"backendEnvironmentName,omitempty"`
}

type GetBackendRequest struct {
	PathParams GetBackendPathParams
	Headers    GetBackendHeaders
	Request    GetBackendRequestBody `request:"mediaType=application/json"`
}

type GetBackendResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GatewayTimeoutException  *interface{}
	GetBackendResponse       *shared.GetBackendResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
