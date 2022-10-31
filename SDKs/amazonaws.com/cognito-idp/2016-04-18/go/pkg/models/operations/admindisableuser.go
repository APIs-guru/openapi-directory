package operations

import (
	"openapi/pkg/models/shared"
)

type AdminDisableUserXAmzTargetEnum string

const (
	AdminDisableUserXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminDisableUser AdminDisableUserXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminDisableUser"
)

type AdminDisableUserHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminDisableUserXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AdminDisableUserRequest struct {
	Headers AdminDisableUserHeaders
	Request shared.AdminDisableUserRequest `request:"mediaType=application/json"`
}

type AdminDisableUserResponse struct {
	AdminDisableUserResponse  map[string]interface{}
	ContentType               string
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
	UserNotFoundException     *interface{}
}
