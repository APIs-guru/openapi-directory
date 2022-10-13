package operations

import (
	"openapi/pkg/models/shared"
)

type RespondToAuthChallengeXAmzTargetEnum string

const (
	RespondToAuthChallengeXAmzTargetEnumAwsCognitoIdentityProviderServiceRespondToAuthChallenge RespondToAuthChallengeXAmzTargetEnum = "AWSCognitoIdentityProviderService.RespondToAuthChallenge"
)

type RespondToAuthChallengeHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RespondToAuthChallengeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RespondToAuthChallengeRequest struct {
	Headers RespondToAuthChallengeHeaders
	Request shared.RespondToAuthChallengeRequest `request:"mediaType=application/json"`
}

type RespondToAuthChallengeResponse struct {
	AliasExistsException                     *interface{}
	CodeMismatchException                    *interface{}
	ContentType                              string
	ExpiredCodeException                     *interface{}
	InternalErrorException                   *interface{}
	InvalidLambdaResponseException           *interface{}
	InvalidParameterException                *interface{}
	InvalidPasswordException                 *interface{}
	InvalidSmsRoleAccessPolicyException      *interface{}
	InvalidSmsRoleTrustRelationshipException *interface{}
	InvalidUserPoolConfigurationException    *interface{}
	MfaMethodNotFoundException               *interface{}
	NotAuthorizedException                   *interface{}
	PasswordResetRequiredException           *interface{}
	ResourceNotFoundException                *interface{}
	RespondToAuthChallengeResponse           *shared.RespondToAuthChallengeResponse
	SoftwareTokenMfaNotFoundException        *interface{}
	StatusCode                               int64
	TooManyRequestsException                 *interface{}
	UnexpectedLambdaException                *interface{}
	UserLambdaValidationException            *interface{}
	UserNotConfirmedException                *interface{}
	UserNotFoundException                    *interface{}
}
