package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBackendAuthPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type CreateBackendAuthHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateBackendAuthRequestBodyResourceConfig struct {
	AuthResources       *shared.AuthResourcesEnum                   `json:"AuthResources"`
	IdentityPoolConfigs *shared.CreateBackendAuthIdentityPoolConfig `json:"IdentityPoolConfigs"`
	Service             *shared.ServiceEnum                         `json:"Service"`
	UserPoolConfigs     *shared.CreateBackendAuthUserPoolConfig     `json:"UserPoolConfigs"`
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
