package operations

import (
	"openapi/pkg/models/shared"
)

type CreateUserPoolXAmzTargetEnum string

const (
	CreateUserPoolXAmzTargetEnumAwsCognitoIdentityProviderServiceCreateUserPool CreateUserPoolXAmzTargetEnum = "AWSCognitoIdentityProviderService.CreateUserPool"
)

type CreateUserPoolHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateUserPoolXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateUserPoolRequest struct {
	Headers CreateUserPoolHeaders
	Request shared.CreateUserPoolRequest `request:"mediaType=application/json"`
}

type CreateUserPoolResponse struct {
	ContentType                              string
	CreateUserPoolResponse                   *shared.CreateUserPoolResponse
	InternalErrorException                   *interface{}
	InvalidEmailRoleAccessPolicyException    *interface{}
	InvalidParameterException                *interface{}
	InvalidSmsRoleAccessPolicyException      *interface{}
	InvalidSmsRoleTrustRelationshipException *interface{}
	LimitExceededException                   *interface{}
	NotAuthorizedException                   *interface{}
	StatusCode                               int64
	TooManyRequestsException                 *interface{}
	UserPoolTaggingException                 *interface{}
}
