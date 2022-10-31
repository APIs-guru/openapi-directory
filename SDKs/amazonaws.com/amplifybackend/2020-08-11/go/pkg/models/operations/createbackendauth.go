package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBackendAuthPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type CreateBackendAuthHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateBackendAuthRequestBodyResourceConfig struct {
	AuthResources       *shared.AuthResourcesEnum                   `json:"AuthResources,omitempty"`
	IdentityPoolConfigs *shared.CreateBackendAuthIdentityPoolConfig `json:"IdentityPoolConfigs,omitempty"`
	Service             *shared.ServiceEnum                         `json:"Service,omitempty"`
	UserPoolConfigs     *shared.CreateBackendAuthUserPoolConfig     `json:"UserPoolConfigs,omitempty"`
}

type CreateBackendAuthRequestBody struct {
	BackendEnvironmentName string                                     `json:"backendEnvironmentName"`
	ResourceConfig         CreateBackendAuthRequestBodyResourceConfig `json:"resourceConfig"`
	ResourceName           string                                     `json:"resourceName"`
}

type CreateBackendAuthRequest struct {
	PathParams CreateBackendAuthPathParams
	Headers    CreateBackendAuthHeaders
	Request    CreateBackendAuthRequestBody `request:"mediaType=application/json"`
}

type CreateBackendAuthResponse struct {
	BadRequestException       *interface{}
	ContentType               string
	CreateBackendAuthResponse *shared.CreateBackendAuthResponse
	GatewayTimeoutException   *interface{}
	NotFoundException         *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
