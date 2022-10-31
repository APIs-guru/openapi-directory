package operations

import (
	"openapi/pkg/models/shared"
)

type AdminRemoveUserFromGroupXAmzTargetEnum string

const (
	AdminRemoveUserFromGroupXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminRemoveUserFromGroup AdminRemoveUserFromGroupXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup"
)

type AdminRemoveUserFromGroupHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminRemoveUserFromGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AdminRemoveUserFromGroupRequest struct {
	Headers AdminRemoveUserFromGroupHeaders
	Request shared.AdminRemoveUserFromGroupRequest `request:"mediaType=application/json"`
}

type AdminRemoveUserFromGroupResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
	UserNotFoundException     *interface{}
}
