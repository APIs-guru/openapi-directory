package operations

import (
	"openapi/pkg/models/shared"
)

type CreateUserPoolClientXAmzTargetEnum string

const (
	CreateUserPoolClientXAmzTargetEnumAwsCognitoIdentityProviderServiceCreateUserPoolClient CreateUserPoolClientXAmzTargetEnum = "AWSCognitoIdentityProviderService.CreateUserPoolClient"
)

type CreateUserPoolClientHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateUserPoolClientXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateUserPoolClientRequest struct {
	Headers CreateUserPoolClientHeaders
	Request shared.CreateUserPoolClientRequest `request:"mediaType=application/json"`
}

type CreateUserPoolClientResponse struct {
	ContentType                  string
	CreateUserPoolClientResponse *shared.CreateUserPoolClientResponse
	InternalErrorException       *interface{}
	InvalidOAuthFlowException    *interface{}
	InvalidParameterException    *interface{}
	LimitExceededException       *interface{}
	NotAuthorizedException       *interface{}
	ResourceNotFoundException    *interface{}
	ScopeDoesNotExistException   *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
