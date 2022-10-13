package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTokenPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type CreateTokenHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateTokenRequest struct {
	PathParams CreateTokenPathParams
	Headers    CreateTokenHeaders
}

type CreateTokenResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	CreateTokenResponse      *shared.CreateTokenResponse
	GatewayTimeoutException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
