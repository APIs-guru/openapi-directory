package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeviceXAmzTargetEnum string

const (
	GetDeviceXAmzTargetEnumAwsCognitoIdentityProviderServiceGetDevice GetDeviceXAmzTargetEnum = "AWSCognitoIdentityProviderService.GetDevice"
)

type GetDeviceHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDeviceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
