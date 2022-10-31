package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserPoolDomainXAmzTargetEnum string

const (
	DeleteUserPoolDomainXAmzTargetEnumAwsCognitoIdentityProviderServiceDeleteUserPoolDomain DeleteUserPoolDomainXAmzTargetEnum = "AWSCognitoIdentityProviderService.DeleteUserPoolDomain"
)

type DeleteUserPoolDomainHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteUserPoolDomainXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
