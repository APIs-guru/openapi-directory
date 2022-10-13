package operations

import (
	"openapi/pkg/models/shared"
)

type StartAttachmentUploadHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzBearer        string  `header:"name=X-Amz-Bearer"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartAttachmentUploadRequestBody struct {
	AttachmentName        string `json:"AttachmentName"`
	AttachmentSizeInBytes int64  `json:"AttachmentSizeInBytes"`
	ClientToken           string `json:"ClientToken"`
	ContentType           string `json:"ContentType"`
}

type StartAttachmentUploadRequest struct {
	Headers StartAttachmentUploadHeaders
	Request StartAttachmentUploadRequestBody `request:"mediaType=application/json"`
}

type StartAttachmentUploadResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ServiceQuotaExceededException *interface{}
	StartAttachmentUploadResponse *shared.StartAttachmentUploadResponse
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
