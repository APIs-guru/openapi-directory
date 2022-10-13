package operations

import (
	"openapi/pkg/models/shared"
)

type GetBackendAuthPathParams struct {
	AppID                  string `pathParam:"style=simple,explode=false,name=appId"`
	BackendEnvironmentName string `pathParam:"style=simple,explode=false,name=backendEnvironmentName"`
}

type GetBackendAuthHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetBackendAuthRequestBody struct {
	ResourceName string `json:"resourceName"`
}

type GetBackendAuthRequest struct {
	PathParams GetBackendAuthPathParams
	Headers    GetBackendAuthHeaders
	Request    GetBackendAuthRequestBody `request:"mediaType=application/json"`
}

type GetBackendAuthResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GatewayTimeoutException  *interface{}
	GetBackendAuthResponse   *shared.GetBackendAuthResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
