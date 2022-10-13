package operations

type DeleteFlowHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteFlowRequestBody struct {
	FlowName    string `json:"flowName"`
	ForceDelete *bool  `json:"forceDelete"`
}

type DeleteFlowRequest struct {
	Headers DeleteFlowHeaders
	Request DeleteFlowRequestBody `request:"mediaType=application/json"`
}

type DeleteFlowResponse struct {
	ConflictException         *interface{}
	ContentType               string
	DeleteFlowResponse        map[string]interface{}
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
