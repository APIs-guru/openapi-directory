package operations

import (
	"openapi/pkg/models/shared"
)

type AdminForgetDeviceXAmzTargetEnum string

const (
	AdminForgetDeviceXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminForgetDevice AdminForgetDeviceXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminForgetDevice"
)

type AdminForgetDeviceHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminForgetDeviceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AdminForgetDeviceRequest struct {
	Headers AdminForgetDeviceHeaders
	Request shared.AdminForgetDeviceRequest `request:"mediaType=application/json"`
}

type AdminForgetDeviceResponse struct {
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
