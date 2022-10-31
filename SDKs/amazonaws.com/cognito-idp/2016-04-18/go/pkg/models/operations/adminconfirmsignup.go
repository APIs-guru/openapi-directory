package operations

import (
	"openapi/pkg/models/shared"
)

type AdminConfirmSignUpXAmzTargetEnum string

const (
	AdminConfirmSignUpXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminConfirmSignUp AdminConfirmSignUpXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminConfirmSignUp"
)

type AdminConfirmSignUpHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminConfirmSignUpXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AdminConfirmSignUpRequest struct {
	Headers AdminConfirmSignUpHeaders
	Request shared.AdminConfirmSignUpRequest `request:"mediaType=application/json"`
}

type AdminConfirmSignUpResponse struct {
	AdminConfirmSignUpResponse     map[string]interface{}
	ContentType                    string
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
