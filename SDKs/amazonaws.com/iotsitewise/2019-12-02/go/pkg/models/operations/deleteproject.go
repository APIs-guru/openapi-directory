package operations

type DeleteProjectPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DeleteProjectQueryParams struct {
	ClientToken *string `queryParam:"style=form,explode=true,name=clientToken"`
}

type DeleteProjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteProjectRequest struct {
	PathParams  DeleteProjectPathParams
	QueryParams DeleteProjectQueryParams
	Headers     DeleteProjectHeaders
}

type DeleteProjectResponse struct {
	ContentType               string
	DeleteProjectResponse     map[string]interface{}
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
