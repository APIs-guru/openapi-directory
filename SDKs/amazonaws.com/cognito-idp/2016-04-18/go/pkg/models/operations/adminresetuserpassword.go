package operations

import (
	"openapi/pkg/models/shared"
)

type AdminResetUserPasswordXAmzTargetEnum string

const (
	AdminResetUserPasswordXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminResetUserPassword AdminResetUserPasswordXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminResetUserPassword"
)

type AdminResetUserPasswordHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminResetUserPasswordXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AdminResetUserPasswordRequest struct {
	Headers AdminResetUserPasswordHeaders
	Request shared.AdminResetUserPasswordRequest `request:"mediaType=application/json"`
}

type AdminResetUserPasswordResponse struct {
	AdminResetUserPasswordResponse           map[string]interface{}
	ContentType                              string
	InternalErrorException                   *interface{}
	InvalidEmailRoleAccessPolicyException    *interface{}
	InvalidLambdaResponseException           *interface{}
	InvalidParameterException                *interface{}
	InvalidSmsRoleAccessPolicyException      *interface{}
	InvalidSmsRoleTrustRelationshipException *interface{}
	LimitExceededException                   *interface{}
	NotAuthorizedException                   *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
	TooManyRequestsException                 *interface{}
	UnexpectedLambdaException                *interface{}
	UserLambdaValidationException            *interface{}
	UserNotFoundException                    *interface{}
}
