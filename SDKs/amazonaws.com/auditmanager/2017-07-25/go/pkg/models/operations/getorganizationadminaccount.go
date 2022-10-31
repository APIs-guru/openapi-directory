package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrganizationAdminAccountHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
