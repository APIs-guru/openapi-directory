package operations

type DeleteComputeEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteComputeEnvironmentRequestBody struct {
	ComputeEnvironment string `json:"computeEnvironment"`
}

type DeleteComputeEnvironmentRequest struct {
	Headers DeleteComputeEnvironmentHeaders
	Request DeleteComputeEnvironmentRequestBody `request:"mediaType=application/json"`
}

type DeleteComputeEnvironmentResponse struct {
	ClientException                  *interface{}
	ContentType                      string
	DeleteComputeEnvironmentResponse map[string]interface{}
	ServerException                  *interface{}
	StatusCode                       int64
}
