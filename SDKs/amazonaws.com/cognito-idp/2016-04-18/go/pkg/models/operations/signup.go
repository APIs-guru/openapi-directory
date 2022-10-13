package operations

import (
	"openapi/pkg/models/shared"
)

type SignUpXAmzTargetEnum string

const (
	SignUpXAmzTargetEnumAwsCognitoIdentityProviderServiceSignUp SignUpXAmzTargetEnum = "AWSCognitoIdentityProviderService.SignUp"
)

type SignUpHeaders struct {
	XAmzAlgorithm     *string              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string              `header:"name=X-Amz-Credential"`
	XAmzDate          *string              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SignUpXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SignUpRequest struct {
	Headers SignUpHeaders
	Request shared.SignUpRequest `request:"mediaType=application/json"`
}

type SignUpResponse struct {
	CodeDeliveryFailureException             *interface{}
	ContentType                              string
	InternalErrorException                   *interface{}
	InvalidEmailRoleAccessPolicyException    *interface{}
	InvalidLambdaResponseException           *interface{}
	InvalidParameterException                *interface{}
	InvalidPasswordException                 *interface{}
	InvalidSmsRoleAccessPolicyException      *interface{}
	InvalidSmsRoleTrustRelationshipException *interface{}
	NotAuthorizedException                   *interface{}
	ResourceNotFoundException                *interface{}
	SignUpResponse                           *shared.SignUpResponse
	StatusCode                               int64
	TooManyRequestsException                 *interface{}
	UnexpectedLambdaException                *interface{}
	UserLambdaValidationException            *interface{}
	UsernameExistsException                  *interface{}
}
