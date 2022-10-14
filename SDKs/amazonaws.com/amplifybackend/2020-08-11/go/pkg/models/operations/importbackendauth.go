package operations

import (
	"openapi/pkg/models/shared"
)

type ImportBackendAuthPathParams struct {
	AppID                  string `pathParam:"style=simple,explode=false,name=appId"`
	BackendEnvironmentName string `pathParam:"style=simple,explode=false,name=backendEnvironmentName"`
}

type ImportBackendAuthHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ImportBackendAuthRequestBody struct {
	IdentityPoolID *string `json:"identityPoolId,omitempty"`
	NativeClientID string  `json:"nativeClientId"`
	UserPoolID     string  `json:"userPoolId"`
	WebClientID    string  `json:"webClientId"`
}

type ImportBackendAuthRequest struct {
	PathParams ImportBackendAuthPathParams
	Headers    ImportBackendAuthHeaders
	Request    ImportBackendAuthRequestBody `request:"mediaType=application/json"`
}

type ImportBackendAuthResponse struct {
	BadRequestException       *interface{}
	ContentType               string
	GatewayTimeoutException   *interface{}
	ImportBackendAuthResponse *shared.ImportBackendAuthResponse
	NotFoundException         *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
