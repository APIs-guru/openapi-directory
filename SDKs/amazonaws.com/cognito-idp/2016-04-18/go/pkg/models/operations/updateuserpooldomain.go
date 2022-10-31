package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserPoolDomainXAmzTargetEnum string

const (
	UpdateUserPoolDomainXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateUserPoolDomain UpdateUserPoolDomainXAmzTargetEnum = "AWSCognitoIdentityProviderService.UpdateUserPoolDomain"
)

type UpdateUserPoolDomainHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateUserPoolDomainXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
