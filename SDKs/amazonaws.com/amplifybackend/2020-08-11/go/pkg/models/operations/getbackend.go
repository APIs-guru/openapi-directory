package operations

import (
	"openapi/pkg/models/shared"
)

type GetBackendPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type GetBackendHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
