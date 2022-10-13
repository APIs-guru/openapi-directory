package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateRoleToGroupPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
}

type AssociateRoleToGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AssociateRoleToGroupRequestBody struct {
	RoleArn string `json:"RoleArn"`
}

type AssociateRoleToGroupRequest struct {
	PathParams AssociateRoleToGroupPathParams
	Headers    AssociateRoleToGroupHeaders
	Request    AssociateRoleToGroupRequestBody `request:"mediaType=application/json"`
}

type AssociateRoleToGroupResponse struct {
	AssociateRoleToGroupResponse *shared.AssociateRoleToGroupResponse
	BadRequestException          *interface{}
	ContentType                  string
	InternalServerErrorException *interface{}
	StatusCode                   int64
}
