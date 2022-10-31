package operations

import (
	"openapi/pkg/models/shared"
)

type SendEventHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzBearer        string  `header:"style=simple,explode=false,name=X-Amz-Bearer"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type SendEventRequestBody struct {
	ClientToken *string `json:"ClientToken,omitempty"`
	Content     *string `json:"Content,omitempty"`
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
