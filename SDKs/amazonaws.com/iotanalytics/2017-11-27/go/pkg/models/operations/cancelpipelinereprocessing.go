package operations

type CancelPipelineReprocessingPathParams struct {
	PipelineName   string `pathParam:"style=simple,explode=false,name=pipelineName"`
	ReprocessingID string `pathParam:"style=simple,explode=false,name=reprocessingId"`
}

type CancelPipelineReprocessingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CancelPipelineReprocessingRequest struct {
	PathParams CancelPipelineReprocessingPathParams
	Headers    CancelPipelineReprocessingHeaders
}

type CancelPipelineReprocessingResponse struct {
	CancelPipelineReprocessingResponse map[string]interface{}
	ContentType                        string
	InternalFailureException           *interface{}
	InvalidRequestException            *interface{}
	ResourceNotFoundException          *interface{}
	ServiceUnavailableException        *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
}
