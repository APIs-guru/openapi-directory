package operations

type DeregisterOrganizationAdminAccountHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeregisterOrganizationAdminAccountRequestBody struct {
	AdminAccountID *string `json:"adminAccountId,omitempty"`
}

type DeregisterOrganizationAdminAccountRequest struct {
	Headers DeregisterOrganizationAdminAccountHeaders
	Request DeregisterOrganizationAdminAccountRequestBody `request:"mediaType=application/json"`
}

type DeregisterOrganizationAdminAccountResponse struct {
	AccessDeniedException                      *interface{}
	ContentType                                string
	DeregisterOrganizationAdminAccountResponse map[string]interface{}
	InternalServerException                    *interface{}
	ResourceNotFoundException                  *interface{}
	StatusCode                                 int64
	ValidationException                        *interface{}
}
