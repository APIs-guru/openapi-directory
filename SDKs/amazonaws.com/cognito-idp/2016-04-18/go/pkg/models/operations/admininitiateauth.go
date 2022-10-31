package operations

import (
	"openapi/pkg/models/shared"
)

type AdminInitiateAuthXAmzTargetEnum string

const (
	AdminInitiateAuthXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminInitiateAuth AdminInitiateAuthXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminInitiateAuth"
)

type AdminInitiateAuthHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminInitiateAuthXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AdminInitiateAuthRequest struct {
	Headers AdminInitiateAuthHeaders
	Request shared.AdminInitiateAuthRequest `request:"mediaType=application/json"`
}

type AdminInitiateAuthResponse struct {
	AdminInitiateAuthResponse                *shared.AdminInitiateAuthResponse
	ContentType                              string
	InternalErrorException                   *interface{}
	InvalidLambdaResponseException           *interface{}
	InvalidParameterException                *interface{}
	InvalidSmsRoleAccessPolicyException      *interface{}
	InvalidSmsRoleTrustRelationshipException *interface{}
	InvalidUserPoolConfigurationException    *interface{}
	MfaMethodNotFoundException               *interface{}
	NotAuthorizedException                   *interface{}
	PasswordResetRequiredException           *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
	TooManyRequestsException                 *interface{}
	UnexpectedLambdaException                *interface{}
	UserLambdaValidationException            *interface{}
	UserNotConfirmedException                *interface{}
	UserNotFoundException                    *interface{}
}
