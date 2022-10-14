package operations

type UpdateWorkspaceAliasPathParams struct {
	WorkspaceID string `pathParam:"style=simple,explode=false,name=workspaceId"`
}

type UpdateWorkspaceAliasHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateWorkspaceAliasRequestBody struct {
	Alias       *string `json:"alias,omitempty"`
	ClientToken *string `json:"clientToken,omitempty"`
}

type UpdateWorkspaceAliasRequest struct {
	PathParams UpdateWorkspaceAliasPathParams
	Headers    UpdateWorkspaceAliasHeaders
	Request    UpdateWorkspaceAliasRequestBody `request:"mediaType=application/json"`
}

type UpdateWorkspaceAliasResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
