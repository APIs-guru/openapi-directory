package operations

import (
	"openapi/pkg/models/shared"
)

type ConfirmSignUpXAmzTargetEnum string

const (
	ConfirmSignUpXAmzTargetEnumAwsCognitoIdentityProviderServiceConfirmSignUp ConfirmSignUpXAmzTargetEnum = "AWSCognitoIdentityProviderService.ConfirmSignUp"
)

type ConfirmSignUpHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ConfirmSignUpXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
