package operations

import (
	"openapi/pkg/models/shared"
)

type SignUpXAmzTargetEnum string

const (
	SignUpXAmzTargetEnumAwsCognitoIdentityProviderServiceSignUp SignUpXAmzTargetEnum = "AWSCognitoIdentityProviderService.SignUp"
)

type SignUpHeaders struct {
	XAmzAlgorithm     *string              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SignUpXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
