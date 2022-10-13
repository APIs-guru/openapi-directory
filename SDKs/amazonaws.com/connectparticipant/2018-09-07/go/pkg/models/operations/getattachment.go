package operations

import (
	"openapi/pkg/models/shared"
)

type GetAttachmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzBearer        string  `header:"name=X-Amz-Bearer"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAttachmentRequestBody struct {
	AttachmentID string `json:"AttachmentId"`
}

type GetAttachmentRequest struct {
	Headers GetAttachmentHeaders
	Request GetAttachmentRequestBody `request:"mediaType=application/json"`
}

type GetAttachmentResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	GetAttachmentResponse   *shared.GetAttachmentResponse
	InternalServerException *interface{}
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
