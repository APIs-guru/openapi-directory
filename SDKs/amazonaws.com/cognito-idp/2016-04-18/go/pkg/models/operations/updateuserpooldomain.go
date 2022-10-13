package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserPoolDomainXAmzTargetEnum string

const (
	UpdateUserPoolDomainXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateUserPoolDomain UpdateUserPoolDomainXAmzTargetEnum = "AWSCognitoIdentityProviderService.UpdateUserPoolDomain"
)

type UpdateUserPoolDomainHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateUserPoolDomainXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateUserPoolDomainRequest struct {
	Headers UpdateUserPoolDomainHeaders
	Request shared.UpdateUserPoolDomainRequest `request:"mediaType=application/json"`
}

type UpdateUserPoolDomainResponse struct {
	ContentType                  string
	InternalErrorException       *interface{}
	InvalidParameterException    *interface{}
	NotAuthorizedException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateUserPoolDomainResponse *shared.UpdateUserPoolDomainResponse
}
