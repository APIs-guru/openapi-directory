package operations

type CancelDetectMitigationActionsTaskPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
}

type CancelDetectMitigationActionsTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CancelDetectMitigationActionsTaskRequest struct {
	PathParams CancelDetectMitigationActionsTaskPathParams
	Headers    CancelDetectMitigationActionsTaskHeaders
}

type CancelDetectMitigationActionsTaskResponse struct {
	CancelDetectMitigationActionsTaskResponse map[string]interface{}
	ContentType                               string
	InternalFailureException                  *interface{}
	InvalidRequestException                   *interface{}
	ResourceNotFoundException                 *interface{}
	StatusCode                                int64
	ThrottlingException                       *interface{}
}
