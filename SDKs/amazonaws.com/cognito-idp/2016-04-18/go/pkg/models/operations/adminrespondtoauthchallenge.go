package operations

import (
	"openapi/pkg/models/shared"
)

type AdminRespondToAuthChallengeXAmzTargetEnum string

const (
	AdminRespondToAuthChallengeXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminRespondToAuthChallenge AdminRespondToAuthChallengeXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge"
)

type AdminRespondToAuthChallengeHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminRespondToAuthChallengeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AdminRespondToAuthChallengeRequest struct {
	Headers AdminRespondToAuthChallengeHeaders
	Request shared.AdminRespondToAuthChallengeRequest `request:"mediaType=application/json"`
}

type AdminRespondToAuthChallengeResponse struct {
	AdminRespondToAuthChallengeResponse      *shared.AdminRespondToAuthChallengeResponse
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
	SoftwareTokenMfaNotFoundException        *interface{}
	StatusCode                               int64
	TooManyRequestsException                 *interface{}
	UnexpectedLambdaException                *interface{}
	UserLambdaValidationException            *interface{}
	UserNotConfirmedException                *interface{}
	UserNotFoundException                    *interface{}
}
