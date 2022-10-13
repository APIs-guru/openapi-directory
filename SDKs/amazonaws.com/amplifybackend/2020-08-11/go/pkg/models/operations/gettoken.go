package operations

import (
	"openapi/pkg/models/shared"
)

type GetTokenPathParams struct {
	AppID     string `pathParam:"style=simple,explode=false,name=appId"`
	SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
}

type GetTokenHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetTokenRequest struct {
	PathParams GetTokenPathParams
	Headers    GetTokenHeaders
}

type GetTokenResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GatewayTimeoutException  *interface{}
	GetTokenResponse         *shared.GetTokenResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
