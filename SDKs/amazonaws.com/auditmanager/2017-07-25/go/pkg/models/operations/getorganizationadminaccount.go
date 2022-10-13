package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrganizationAdminAccountHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetOrganizationAdminAccountRequest struct {
	Headers GetOrganizationAdminAccountHeaders
}

type GetOrganizationAdminAccountResponse struct {
	AccessDeniedException               *interface{}
	ContentType                         string
	GetOrganizationAdminAccountResponse *shared.GetOrganizationAdminAccountResponse
	InternalServerException             *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
	ValidationException                 *interface{}
}
