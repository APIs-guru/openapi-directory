package operations

type CancelJobHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CancelJobRequestBody struct {
	JobID  string `json:"jobId"`
	Reason string `json:"reason"`
}

type CancelJobRequest struct {
	Headers CancelJobHeaders
	Request CancelJobRequestBody `request:"mediaType=application/json"`
}

type CancelJobResponse struct {
	CancelJobResponse map[string]interface{}
	ClientException   *interface{}
	ContentType       string
	ServerException   *interface{}
	StatusCode        int64
}
