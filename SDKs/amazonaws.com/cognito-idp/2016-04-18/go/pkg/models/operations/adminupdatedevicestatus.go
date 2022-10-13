package operations

import (
	"openapi/pkg/models/shared"
)

type AdminUpdateDeviceStatusXAmzTargetEnum string

const (
	AdminUpdateDeviceStatusXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminUpdateDeviceStatus AdminUpdateDeviceStatusXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus"
)

type AdminUpdateDeviceStatusHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminUpdateDeviceStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AdminUpdateDeviceStatusRequest struct {
	Headers AdminUpdateDeviceStatusHeaders
	Request shared.AdminUpdateDeviceStatusRequest `request:"mediaType=application/json"`
}

type AdminUpdateDeviceStatusResponse struct {
	AdminUpdateDeviceStatusResponse       map[string]interface{}
	ContentType                           string
	InternalErrorException                *interface{}
	InvalidParameterException             *interface{}
	InvalidUserPoolConfigurationException *interface{}
	NotAuthorizedException                *interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
	TooManyRequestsException              *interface{}
	UserNotFoundException                 *interface{}
}
