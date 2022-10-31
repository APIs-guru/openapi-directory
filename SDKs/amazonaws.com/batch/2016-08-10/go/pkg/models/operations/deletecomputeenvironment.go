package operations

type DeleteComputeEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
