package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveBackendConfigPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type RemoveBackendConfigHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RemoveBackendConfigRequest struct {
	PathParams RemoveBackendConfigPathParams
	Headers    RemoveBackendConfigHeaders
}

type RemoveBackendConfigResponse struct {
	BadRequestException         *interface{}
	ContentType                 string
	GatewayTimeoutException     *interface{}
	NotFoundException           *interface{}
	RemoveBackendConfigResponse *shared.RemoveBackendConfigResponse
	StatusCode                  int64
	TooManyRequestsException    *interface{}
}
