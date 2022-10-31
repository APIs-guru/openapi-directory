package operations

import (
	"openapi/pkg/models/shared"
)

type GetRetainedMessagePathParams struct {
	Topic string `pathParam:"style=simple,explode=false,name=topic"`
}

type GetRetainedMessageHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
