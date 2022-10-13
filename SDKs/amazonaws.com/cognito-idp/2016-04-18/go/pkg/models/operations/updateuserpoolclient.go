package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserPoolClientXAmzTargetEnum string

const (
	UpdateUserPoolClientXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateUserPoolClient UpdateUserPoolClientXAmzTargetEnum = "AWSCognitoIdentityProviderService.UpdateUserPoolClient"
)

type UpdateUserPoolClientHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateUserPoolClientXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateUserPoolClientRequest struct {
	Headers UpdateUserPoolClientHeaders
	Request shared.UpdateUserPoolClientRequest `request:"mediaType=application/json"`
}

type UpdateUserPoolClientResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalErrorException          *interface{}
	InvalidOAuthFlowException       *interface{}
	InvalidParameterException       *interface{}
	NotAuthorizedException          *interface{}
	ResourceNotFoundException       *interface{}
	ScopeDoesNotExistException      *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
	UpdateUserPoolClientResponse    *shared.UpdateUserPoolClientResponse
}
