package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeviceXAmzTargetEnum string

const (
	GetDeviceXAmzTargetEnumAwsCognitoIdentityProviderServiceGetDevice GetDeviceXAmzTargetEnum = "AWSCognitoIdentityProviderService.GetDevice"
)

type GetDeviceHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDeviceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDeviceRequest struct {
	Headers GetDeviceHeaders
	Request shared.GetDeviceRequest `request:"mediaType=application/json"`
}

type GetDeviceResponse struct {
	ContentType                           string
	GetDeviceResponse                     *shared.GetDeviceResponse
	InternalErrorException                *interface{}
	InvalidParameterException             *interface{}
	InvalidUserPoolConfigurationException *interface{}
	NotAuthorizedException                *interface{}
	PasswordResetRequiredException        *interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
	TooManyRequestsException              *interface{}
	UserNotConfirmedException             *interface{}
	UserNotFoundException                 *interface{}
}
