package operations

import (
	"openapi/pkg/models/shared"
)

type CreateIdentityProviderXAmzTargetEnum string

const (
	CreateIdentityProviderXAmzTargetEnumAwsCognitoIdentityProviderServiceCreateIdentityProvider CreateIdentityProviderXAmzTargetEnum = "AWSCognitoIdentityProviderService.CreateIdentityProvider"
)

type CreateIdentityProviderHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateIdentityProviderXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateIdentityProviderRequest struct {
	Headers CreateIdentityProviderHeaders
	Request shared.CreateIdentityProviderRequest `request:"mediaType=application/json"`
}

type CreateIdentityProviderResponse struct {
	ContentType                    string
	CreateIdentityProviderResponse *shared.CreateIdentityProviderResponse
	DuplicateProviderException     *interface{}
	InternalErrorException         *interface{}
	InvalidParameterException      *interface{}
	LimitExceededException         *interface{}
	NotAuthorizedException         *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
