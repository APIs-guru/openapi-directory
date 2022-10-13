package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTokenPathParams struct {
	AppID     string `pathParam:"style=simple,explode=false,name=appId"`
	SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
}

type DeleteTokenHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteTokenRequest struct {
	PathParams DeleteTokenPathParams
	Headers    DeleteTokenHeaders
}

type DeleteTokenResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	DeleteTokenResponse      *shared.DeleteTokenResponse
	GatewayTimeoutException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
