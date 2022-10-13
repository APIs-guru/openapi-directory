package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssociatedRolePathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
}

type GetAssociatedRoleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAssociatedRoleRequest struct {
	PathParams GetAssociatedRolePathParams
	Headers    GetAssociatedRoleHeaders
}

type GetAssociatedRoleResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	GetAssociatedRoleResponse    *shared.GetAssociatedRoleResponse
	InternalServerErrorException *interface{}
	StatusCode                   int64
}
