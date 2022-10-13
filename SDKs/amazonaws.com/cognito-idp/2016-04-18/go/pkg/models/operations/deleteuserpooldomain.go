package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserPoolDomainXAmzTargetEnum string

const (
	DeleteUserPoolDomainXAmzTargetEnumAwsCognitoIdentityProviderServiceDeleteUserPoolDomain DeleteUserPoolDomainXAmzTargetEnum = "AWSCognitoIdentityProviderService.DeleteUserPoolDomain"
)

type DeleteUserPoolDomainHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteUserPoolDomainXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteUserPoolDomainRequest struct {
	Headers DeleteUserPoolDomainHeaders
	Request shared.DeleteUserPoolDomainRequest `request:"mediaType=application/json"`
}

type DeleteUserPoolDomainResponse struct {
	ContentType                  string
	DeleteUserPoolDomainResponse map[string]interface{}
	InternalErrorException       *interface{}
	InvalidParameterException    *interface{}
	NotAuthorizedException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
