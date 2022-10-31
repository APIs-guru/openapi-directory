package operations

import (
	"openapi/pkg/models/shared"
)

type ForgetDeviceXAmzTargetEnum string

const (
	ForgetDeviceXAmzTargetEnumAwsCognitoIdentityProviderServiceForgetDevice ForgetDeviceXAmzTargetEnum = "AWSCognitoIdentityProviderService.ForgetDevice"
)

type ForgetDeviceHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ForgetDeviceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ForgetDeviceRequest struct {
	Headers ForgetDeviceHeaders
	Request shared.ForgetDeviceRequest `request:"mediaType=application/json"`
}

type ForgetDeviceResponse struct {
	ContentType                           string
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
