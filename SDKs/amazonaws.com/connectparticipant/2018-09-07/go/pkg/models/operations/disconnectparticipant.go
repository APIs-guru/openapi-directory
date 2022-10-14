package operations

type DisconnectParticipantHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzBearer        string  `header:"name=X-Amz-Bearer"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DisconnectParticipantRequestBody struct {
	ClientToken *string `json:"ClientToken,omitempty"`
}

type DisconnectParticipantRequest struct {
	Headers DisconnectParticipantHeaders
	Request DisconnectParticipantRequestBody `request:"mediaType=application/json"`
}

type DisconnectParticipantResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	DisconnectParticipantResponse map[string]interface{}
	InternalServerException       *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
