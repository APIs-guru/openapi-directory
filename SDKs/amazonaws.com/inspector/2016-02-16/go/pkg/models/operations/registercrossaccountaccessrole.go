package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterCrossAccountAccessRoleXAmzTargetEnum string

const (
	RegisterCrossAccountAccessRoleXAmzTargetEnumInspectorServiceRegisterCrossAccountAccessRole RegisterCrossAccountAccessRoleXAmzTargetEnum = "InspectorService.RegisterCrossAccountAccessRole"
)

type RegisterCrossAccountAccessRoleHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterCrossAccountAccessRoleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RegisterCrossAccountAccessRoleRequest struct {
	Headers RegisterCrossAccountAccessRoleHeaders
	Request shared.RegisterCrossAccountAccessRoleRequest `request:"mediaType=application/json"`
}

type RegisterCrossAccountAccessRoleResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	InternalException                      *interface{}
	InvalidCrossAccountRoleException       *interface{}
	InvalidInputException                  *interface{}
	ServiceTemporarilyUnavailableException *interface{}
	StatusCode                             int64
}
