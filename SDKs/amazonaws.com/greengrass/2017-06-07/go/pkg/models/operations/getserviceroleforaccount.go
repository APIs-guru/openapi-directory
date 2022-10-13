package operations

import (
	"openapi/pkg/models/shared"
)

type GetServiceRoleForAccountHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetServiceRoleForAccountRequest struct {
	Headers GetServiceRoleForAccountHeaders
}

type GetServiceRoleForAccountResponse struct {
	ContentType                      string
	GetServiceRoleForAccountResponse *shared.GetServiceRoleForAccountResponse
	InternalServerErrorException     *interface{}
	StatusCode                       int64
}
