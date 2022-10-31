package operations

import (
	"openapi/pkg/models/shared"
)

type ConfirmForgotPasswordXAmzTargetEnum string

const (
	ConfirmForgotPasswordXAmzTargetEnumAwsCognitoIdentityProviderServiceConfirmForgotPassword ConfirmForgotPasswordXAmzTargetEnum = "AWSCognitoIdentityProviderService.ConfirmForgotPassword"
)

type ConfirmForgotPasswordHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ConfirmForgotPasswordXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ConfirmForgotPasswordRequest struct {
	Headers ConfirmForgotPasswordHeaders
	Request shared.ConfirmForgotPasswordRequest `request:"mediaType=application/json"`
}

type ConfirmForgotPasswordResponse struct {
	CodeMismatchException          *interface{}
	ConfirmForgotPasswordResponse  map[string]interface{}
	ContentType                    string
	ExpiredCodeException           *interface{}
	InternalErrorException         *interface{}
	InvalidLambdaResponseException *interface{}
	InvalidParameterException      *interface{}
	InvalidPasswordException       *interface{}
	LimitExceededException         *interface{}
	NotAuthorizedException         *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	TooManyFailedAttemptsException *interface{}
	TooManyRequestsException       *interface{}
	UnexpectedLambdaException      *interface{}
	UserLambdaValidationException  *interface{}
	UserNotConfirmedException      *interface{}
	UserNotFoundException          *interface{}
}
