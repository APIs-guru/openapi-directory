package operations

type CancelJobExecutionPathParams struct {
	JobID     string `pathParam:"style=simple,explode=false,name=jobId"`
	ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
}

type CancelJobExecutionQueryParams struct {
	Force *bool `queryParam:"style=form,explode=true,name=force"`
}

type CancelJobExecutionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CancelJobExecutionRequestBody struct {
	ExpectedVersion *int64            `json:"expectedVersion,omitempty"`
	StatusDetails   map[string]string `json:"statusDetails,omitempty"`
}

type CancelJobExecutionRequest struct {
	PathParams  CancelJobExecutionPathParams
	QueryParams CancelJobExecutionQueryParams
	Headers     CancelJobExecutionHeaders
	Request     CancelJobExecutionRequestBody `request:"mediaType=application/json"`
}

type CancelJobExecutionResponse struct {
	ContentType                     string
	InvalidRequestException         *interface{}
	InvalidStateTransitionException *interface{}
	ResourceNotFoundException       *interface{}
	ServiceUnavailableException     *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	VersionConflictException        *interface{}
}
