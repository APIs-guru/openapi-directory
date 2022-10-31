package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteBackendAuthPathParams struct {
	AppID                  string `pathParam:"style=simple,explode=false,name=appId"`
	BackendEnvironmentName string `pathParam:"style=simple,explode=false,name=backendEnvironmentName"`
}

type DeleteBackendAuthHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteBackendAuthRequestBody struct {
	ResourceName string `json:"resourceName"`
}

type DeleteBackendAuthRequest struct {
	PathParams DeleteBackendAuthPathParams
	Headers    DeleteBackendAuthHeaders
	Request    DeleteBackendAuthRequestBody `request:"mediaType=application/json"`
}

type DeleteBackendAuthResponse struct {
	BadRequestException       *interface{}
	ContentType               string
	DeleteBackendAuthResponse *shared.DeleteBackendAuthResponse
	GatewayTimeoutException   *interface{}
	NotFoundException         *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
