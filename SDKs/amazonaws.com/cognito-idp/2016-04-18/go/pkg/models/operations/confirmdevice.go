package operations

import (
	"openapi/pkg/models/shared"
)

type ConfirmDeviceXAmzTargetEnum string

const (
	ConfirmDeviceXAmzTargetEnumAwsCognitoIdentityProviderServiceConfirmDevice ConfirmDeviceXAmzTargetEnum = "AWSCognitoIdentityProviderService.ConfirmDevice"
)

type ConfirmDeviceHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ConfirmDeviceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ConfirmDeviceRequest struct {
	Headers ConfirmDeviceHeaders
	Request shared.ConfirmDeviceRequest `request:"mediaType=application/json"`
}

type ConfirmDeviceResponse struct {
	ConfirmDeviceResponse                 *shared.ConfirmDeviceResponse
	ContentType                           string
	InternalErrorException                *interface{}
	InvalidLambdaResponseException        *interface{}
	InvalidParameterException             *interface{}
	InvalidPasswordException              *interface{}
	InvalidUserPoolConfigurationException *interface{}
	NotAuthorizedException                *interface{}
	PasswordResetRequiredException        *interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
	TooManyRequestsException              *interface{}
	UserNotConfirmedException             *interface{}
	UserNotFoundException                 *interface{}
	UsernameExistsException               *interface{}
}
