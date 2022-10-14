package operations

type UpdateApplicationPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=applicationId"`
}

type UpdateApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateApplicationRequestBody struct {
	ApplicationDescription *string `json:"applicationDescription,omitempty"`
	ApplicationName        *string `json:"applicationName,omitempty"`
	ClientToken            *string `json:"clientToken,omitempty"`
}

type UpdateApplicationRequest struct {
	PathParams UpdateApplicationPathParams
	Headers    UpdateApplicationHeaders
	Request    UpdateApplicationRequestBody `request:"mediaType=application/json"`
}

type UpdateApplicationResponse struct {
	ConflictException         *interface{}
	ContentType               string
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	UpdateApplicationResponse map[string]interface{}
}
