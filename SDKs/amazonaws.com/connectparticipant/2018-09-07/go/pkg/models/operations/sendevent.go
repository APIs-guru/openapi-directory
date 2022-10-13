package operations

import (
	"openapi/pkg/models/shared"
)

type SendEventHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzBearer        string  `header:"name=X-Amz-Bearer"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SendEventRequestBody struct {
	ClientToken *string `json:"ClientToken"`
	Content     *string `json:"Content"`
	ContentType string  `json:"ContentType"`
}

type SendEventRequest struct {
	Headers SendEventHeaders
	Request SendEventRequestBody `request:"mediaType=application/json"`
}

type SendEventResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	InternalServerException *interface{}
	SendEventResponse       *shared.SendEventResponse
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
