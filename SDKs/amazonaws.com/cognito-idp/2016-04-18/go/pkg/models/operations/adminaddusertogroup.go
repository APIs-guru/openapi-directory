package operations

import (
	"openapi/pkg/models/shared"
)

type AdminAddUserToGroupXAmzTargetEnum string

const (
	AdminAddUserToGroupXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminAddUserToGroup AdminAddUserToGroupXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminAddUserToGroup"
)

type AdminAddUserToGroupHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminAddUserToGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AdminAddUserToGroupRequest struct {
	Headers AdminAddUserToGroupHeaders
	Request shared.AdminAddUserToGroupRequest `request:"mediaType=application/json"`
}

type AdminAddUserToGroupResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
	UserNotFoundException     *interface{}
}
