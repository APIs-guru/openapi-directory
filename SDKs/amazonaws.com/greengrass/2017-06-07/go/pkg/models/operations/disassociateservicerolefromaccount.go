package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateServiceRoleFromAccountHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DisassociateServiceRoleFromAccountRequest struct {
	Headers DisassociateServiceRoleFromAccountHeaders
}

type DisassociateServiceRoleFromAccountResponse struct {
	ContentType                                string
	DisassociateServiceRoleFromAccountResponse *shared.DisassociateServiceRoleFromAccountResponse
	InternalServerErrorException               *interface{}
	StatusCode                                 int64
}
