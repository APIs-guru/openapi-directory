package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBackendConfigPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type CreateBackendConfigHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateBackendConfigRequestBody struct {
	BackendManagerAppID *string `json:"backendManagerAppId,omitempty"`
}

type CreateBackendConfigRequest struct {
	PathParams CreateBackendConfigPathParams
	Headers    CreateBackendConfigHeaders
	Request    CreateBackendConfigRequestBody `request:"mediaType=application/json"`
}

type CreateBackendConfigResponse struct {
	BadRequestException         *interface{}
	ContentType                 string
	CreateBackendConfigResponse *shared.CreateBackendConfigResponse
	GatewayTimeoutException     *interface{}
	NotFoundException           *interface{}
	StatusCode                  int64
	TooManyRequestsException    *interface{}
}
