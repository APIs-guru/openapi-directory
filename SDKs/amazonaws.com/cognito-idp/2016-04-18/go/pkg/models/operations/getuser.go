package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserXAmzTargetEnum string

const (
	GetUserXAmzTargetEnumAwsCognitoIdentityProviderServiceGetUser GetUserXAmzTargetEnum = "AWSCognitoIdentityProviderService.GetUser"
)

type GetUserHeaders struct {
	XAmzAlgorithm     *string               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"name=X-Amz-Credential"`
	XAmzDate          *string               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetUserXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetUserRequest struct {
	Headers GetUserHeaders
	Request shared.GetUserRequest `request:"mediaType=application/json"`
}

type GetUserResponse struct {
	ContentType                    string
	GetUserResponse                *shared.GetUserResponse
	InternalErrorException         *interface{}
	InvalidParameterException      *interface{}
	NotAuthorizedException         *interface{}
	PasswordResetRequiredException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
	UserNotConfirmedException      *interface{}
	UserNotFoundException          *interface{}
}
