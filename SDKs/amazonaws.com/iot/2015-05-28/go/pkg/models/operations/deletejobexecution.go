package operations

type DeleteJobExecutionPathParams struct {
	ExecutionNumber int64  `pathParam:"style=simple,explode=false,name=executionNumber"`
	JobID           string `pathParam:"style=simple,explode=false,name=jobId"`
	ThingName       string `pathParam:"style=simple,explode=false,name=thingName"`
}

type DeleteJobExecutionQueryParams struct {
	Force       *bool   `queryParam:"style=form,explode=true,name=force"`
	NamespaceID *string `queryParam:"style=form,explode=true,name=namespaceId"`
}

type DeleteJobExecutionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteJobExecutionRequest struct {
	PathParams  DeleteJobExecutionPathParams
	QueryParams DeleteJobExecutionQueryParams
	Headers     DeleteJobExecutionHeaders
}

type DeleteJobExecutionResponse struct {
	ContentType                     string
	InvalidRequestException         *interface{}
	InvalidStateTransitionException *interface{}
	ResourceNotFoundException       *interface{}
	ServiceUnavailableException     *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
}
