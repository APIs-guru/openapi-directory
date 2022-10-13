package operations

import (
	"openapi/pkg/models/shared"
)

type VerifyUserAttributeXAmzTargetEnum string

const (
	VerifyUserAttributeXAmzTargetEnumAwsCognitoIdentityProviderServiceVerifyUserAttribute VerifyUserAttributeXAmzTargetEnum = "AWSCognitoIdentityProviderService.VerifyUserAttribute"
)

type VerifyUserAttributeHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        VerifyUserAttributeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type VerifyUserAttributeRequest struct {
	Headers VerifyUserAttributeHeaders
	Request shared.VerifyUserAttributeRequest `request:"mediaType=application/json"`
}

type VerifyUserAttributeResponse struct {
	CodeMismatchException          *interface{}
	ContentType                    string
	ExpiredCodeException           *interface{}
	InternalErrorException         *interface{}
	InvalidParameterException      *interface{}
	LimitExceededException         *interface{}
	NotAuthorizedException         *interface{}
	PasswordResetRequiredException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
	UserNotConfirmedException      *interface{}
	UserNotFoundException          *interface{}
	VerifyUserAttributeResponse    map[string]interface{}
}
