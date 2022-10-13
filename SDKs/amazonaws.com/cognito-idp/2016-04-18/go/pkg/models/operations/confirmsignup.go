package operations

import (
	"openapi/pkg/models/shared"
)

type ConfirmSignUpXAmzTargetEnum string

const (
	ConfirmSignUpXAmzTargetEnumAwsCognitoIdentityProviderServiceConfirmSignUp ConfirmSignUpXAmzTargetEnum = "AWSCognitoIdentityProviderService.ConfirmSignUp"
)

type ConfirmSignUpHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ConfirmSignUpXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ConfirmSignUpRequest struct {
	Headers ConfirmSignUpHeaders
	Request shared.ConfirmSignUpRequest `request:"mediaType=application/json"`
}

type ConfirmSignUpResponse struct {
	AliasExistsException           *interface{}
	CodeMismatchException          *interface{}
	ConfirmSignUpResponse          map[string]interface{}
	ContentType                    string
	ExpiredCodeException           *interface{}
	InternalErrorException         *interface{}
	InvalidLambdaResponseException *interface{}
	InvalidParameterException      *interface{}
	LimitExceededException         *interface{}
	NotAuthorizedException         *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	TooManyFailedAttemptsException *interface{}
	TooManyRequestsException       *interface{}
	UnexpectedLambdaException      *interface{}
	UserLambdaValidationException  *interface{}
	UserNotFoundException          *interface{}
}
