package operations

import (
	"openapi/pkg/models/shared"
)

type AdminEnableUserXAmzTargetEnum string

const (
	AdminEnableUserXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminEnableUser AdminEnableUserXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminEnableUser"
)

type AdminEnableUserHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminEnableUserXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AdminEnableUserRequest struct {
	Headers AdminEnableUserHeaders
	Request shared.AdminEnableUserRequest `request:"mediaType=application/json"`
}

type AdminEnableUserResponse struct {
	AdminEnableUserResponse   map[string]interface{}
	ContentType               string
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
	UserNotFoundException     *interface{}
}
