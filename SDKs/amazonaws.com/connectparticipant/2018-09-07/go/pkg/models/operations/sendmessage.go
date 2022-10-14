package operations

import (
	"openapi/pkg/models/shared"
)

type SendMessageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzBearer        string  `header:"name=X-Amz-Bearer"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SendMessageRequestBody struct {
	ClientToken *string `json:"ClientToken,omitempty"`
	Content     string  `json:"Content"`
	ContentType string  `json:"ContentType"`
}

type SendMessageRequest struct {
	Headers SendMessageHeaders
	Request SendMessageRequestBody `request:"mediaType=application/json"`
}

type SendMessageResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	InternalServerException *interface{}
	SendMessageResponse     *shared.SendMessageResponse
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
