package operations

type DisassociateMembershipHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DisassociateMembershipRequestBody struct {
	GraphArn string `json:"GraphArn"`
}

type DisassociateMembershipRequest struct {
	Headers DisassociateMembershipHeaders
	Request DisassociateMembershipRequestBody `request:"mediaType=application/json"`
}

type DisassociateMembershipResponse struct {
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
