package operations

import (
	"openapi/pkg/models/shared"
)

type ResendConfirmationCodeXAmzTargetEnum string

const (
	ResendConfirmationCodeXAmzTargetEnumAwsCognitoIdentityProviderServiceResendConfirmationCode ResendConfirmationCodeXAmzTargetEnum = "AWSCognitoIdentityProviderService.ResendConfirmationCode"
)

type ResendConfirmationCodeHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ResendConfirmationCodeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ResendConfirmationCodeRequest struct {
	Headers ResendConfirmationCodeHeaders
	Request shared.ResendConfirmationCodeRequest `request:"mediaType=application/json"`
}

type ResendConfirmationCodeResponse struct {
	CodeDeliveryFailureException             *interface{}
	ContentType                              string
	InternalErrorException                   *interface{}
	InvalidEmailRoleAccessPolicyException    *interface{}
	InvalidLambdaResponseException           *interface{}
	InvalidParameterException                *interface{}
	InvalidSmsRoleAccessPolicyException      *interface{}
	InvalidSmsRoleTrustRelationshipException *interface{}
	LimitExceededException                   *interface{}
	NotAuthorizedException                   *interface{}
	ResendConfirmationCodeResponse           *shared.ResendConfirmationCodeResponse
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
	TooManyRequestsException                 *interface{}
	UnexpectedLambdaException                *interface{}
	UserLambdaValidationException            *interface{}
	UserNotFoundException                    *interface{}
}
