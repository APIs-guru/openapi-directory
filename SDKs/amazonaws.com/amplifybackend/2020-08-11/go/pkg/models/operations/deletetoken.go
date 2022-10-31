package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTokenPathParams struct {
	AppID     string `pathParam:"style=simple,explode=false,name=appId"`
	SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
}

type DeleteTokenHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
