package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterOrganizationAdminAccountHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RegisterOrganizationAdminAccountRequestBody struct {
	AdminAccountID string `json:"adminAccountId"`
}

type RegisterOrganizationAdminAccountRequest struct {
	Headers RegisterOrganizationAdminAccountHeaders
	Request RegisterOrganizationAdminAccountRequestBody `request:"mediaType=application/json"`
}

type RegisterOrganizationAdminAccountResponse struct {
	AccessDeniedException                    *interface{}
	ContentType                              string
	InternalServerException                  *interface{}
	RegisterOrganizationAdminAccountResponse *shared.RegisterOrganizationAdminAccountResponse
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
	ValidationException                      *interface{}
}
