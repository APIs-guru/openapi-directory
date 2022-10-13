package operations

type CompleteAttachmentUploadHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzBearer        string  `header:"name=X-Amz-Bearer"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CompleteAttachmentUploadRequestBody struct {
	AttachmentIds []string `json:"AttachmentIds"`
	ClientToken   string   `json:"ClientToken"`
}

type CompleteAttachmentUploadRequest struct {
	Headers CompleteAttachmentUploadHeaders
	Request CompleteAttachmentUploadRequestBody `request:"mediaType=application/json"`
}

type CompleteAttachmentUploadResponse struct {
	AccessDeniedException            *interface{}
	CompleteAttachmentUploadResponse map[string]interface{}
	ConflictException                *interface{}
	ContentType                      string
	InternalServerException          *interface{}
	ServiceQuotaExceededException    *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
	ValidationException              *interface{}
}
