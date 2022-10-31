package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDeviceStatusXAmzTargetEnum string

const (
	UpdateDeviceStatusXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateDeviceStatus UpdateDeviceStatusXAmzTargetEnum = "AWSCognitoIdentityProviderService.UpdateDeviceStatus"
)

type UpdateDeviceStatusHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDeviceStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateDeviceStatusRequest struct {
	Headers UpdateDeviceStatusHeaders
	Request shared.UpdateDeviceStatusRequest `request:"mediaType=application/json"`
}

type UpdateDeviceStatusResponse struct {
	ContentType                           string
	InternalErrorException                *interface{}
	InvalidParameterException             *interface{}
	InvalidUserPoolConfigurationException *interface{}
	NotAuthorizedException                *interface{}
	PasswordResetRequiredException        *interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
	TooManyRequestsException              *interface{}
	UpdateDeviceStatusResponse            map[string]interface{}
	UserNotConfirmedException             *interface{}
	UserNotFoundException                 *interface{}
}
