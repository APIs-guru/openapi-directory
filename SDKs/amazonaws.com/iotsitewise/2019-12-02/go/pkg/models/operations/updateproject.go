package operations

type UpdateProjectPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type UpdateProjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateProjectRequestBody struct {
	ClientToken        *string `json:"clientToken,omitempty"`
	ProjectDescription *string `json:"projectDescription,omitempty"`
	ProjectName        string  `json:"projectName"`
}

type UpdateProjectRequest struct {
	PathParams UpdateProjectPathParams
	Headers    UpdateProjectHeaders
	Request    UpdateProjectRequestBody `request:"mediaType=application/json"`
}

type UpdateProjectResponse struct {
	ContentType               string
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	UpdateProjectResponse     map[string]interface{}
}
