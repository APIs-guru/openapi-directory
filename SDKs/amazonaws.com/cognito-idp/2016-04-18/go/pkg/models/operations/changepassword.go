package operations

import (
	"openapi/pkg/models/shared"
)

type ChangePasswordXAmzTargetEnum string

const (
	ChangePasswordXAmzTargetEnumAwsCognitoIdentityProviderServiceChangePassword ChangePasswordXAmzTargetEnum = "AWSCognitoIdentityProviderService.ChangePassword"
)

type ChangePasswordHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ChangePasswordXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ChangePasswordRequest struct {
	Headers ChangePasswordHeaders
	Request shared.ChangePasswordRequest `request:"mediaType=application/json"`
}

type ChangePasswordResponse struct {
	ChangePasswordResponse         map[string]interface{}
	ContentType                    string
	InternalErrorException         *interface{}
	InvalidParameterException      *interface{}
	InvalidPasswordException       *interface{}
	LimitExceededException         *interface{}
	NotAuthorizedException         *interface{}
	PasswordResetRequiredException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
	UserNotConfirmedException      *interface{}
	UserNotFoundException          *interface{}
}
