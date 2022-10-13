package operations

type DeleteApplicationPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=applicationId"`
}

type DeleteApplicationQueryParams struct {
	ClientToken *string `queryParam:"style=form,explode=true,name=clientToken"`
}

type DeleteApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteApplicationRequest struct {
	PathParams  DeleteApplicationPathParams
	QueryParams DeleteApplicationQueryParams
	Headers     DeleteApplicationHeaders
}

type DeleteApplicationResponse struct {
	ContentType               string
	DeleteApplicationResponse map[string]interface{}
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
