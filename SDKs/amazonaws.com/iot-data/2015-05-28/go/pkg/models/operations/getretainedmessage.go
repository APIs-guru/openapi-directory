package operations

import (
	"openapi/pkg/models/shared"
)

type GetRetainedMessagePathParams struct {
	Topic string `pathParam:"style=simple,explode=false,name=topic"`
}

type GetRetainedMessageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRetainedMessageRequest struct {
	PathParams GetRetainedMessagePathParams
	Headers    GetRetainedMessageHeaders
}

type GetRetainedMessageResponse struct {
	ContentType                 string
	GetRetainedMessageResponse  *shared.GetRetainedMessageResponse
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	MethodNotAllowedException   *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
