package operations

type DeleteRoleAliasPathParams struct {
	RoleAlias string `pathParam:"style=simple,explode=false,name=roleAlias"`
}

type DeleteRoleAliasHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteRoleAliasRequest struct {
	PathParams DeleteRoleAliasPathParams
	Headers    DeleteRoleAliasHeaders
}

type DeleteRoleAliasResponse struct {
	ContentType                 string
	DeleteConflictException     *interface{}
	DeleteRoleAliasResponse     map[string]interface{}
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
