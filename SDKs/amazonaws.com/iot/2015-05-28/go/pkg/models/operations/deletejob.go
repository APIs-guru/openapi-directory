package operations

type DeleteJobPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type DeleteJobQueryParams struct {
	Force       *bool   `queryParam:"style=form,explode=true,name=force"`
	NamespaceID *string `queryParam:"style=form,explode=true,name=namespaceId"`
}

type DeleteJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteJobRequest struct {
	PathParams  DeleteJobPathParams
	QueryParams DeleteJobQueryParams
	Headers     DeleteJobHeaders
}

type DeleteJobResponse struct {
	ContentType                     string
	InvalidRequestException         *interface{}
	InvalidStateTransitionException *interface{}
	LimitExceededException          *interface{}
	ResourceNotFoundException       *interface{}
	ServiceUnavailableException     *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
}
