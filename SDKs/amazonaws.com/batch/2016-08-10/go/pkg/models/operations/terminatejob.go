package operations

type TerminateJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type TerminateJobRequestBody struct {
	JobID  string `json:"jobId"`
	Reason string `json:"reason"`
}

type TerminateJobRequest struct {
	Headers TerminateJobHeaders
	Request TerminateJobRequestBody `request:"mediaType=application/json"`
}

type TerminateJobResponse struct {
	ClientException      *interface{}
	ContentType          string
	ServerException      *interface{}
	StatusCode           int64
	TerminateJobResponse map[string]interface{}
}
