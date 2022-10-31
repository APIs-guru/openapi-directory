package operations

import (
	"openapi/pkg/models/shared"
)

type GetIdentityProviderByIdentifierXAmzTargetEnum string

const (
	GetIdentityProviderByIdentifierXAmzTargetEnumAwsCognitoIdentityProviderServiceGetIdentityProviderByIdentifier GetIdentityProviderByIdentifierXAmzTargetEnum = "AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier"
)

type GetIdentityProviderByIdentifierHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetIdentityProviderByIdentifierXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetIdentityProviderByIdentifierRequest struct {
	Headers GetIdentityProviderByIdentifierHeaders
	Request shared.GetIdentityProviderByIdentifierRequest `request:"mediaType=application/json"`
}

type GetIdentityProviderByIdentifierResponse struct {
	ContentType                             string
	GetIdentityProviderByIdentifierResponse *shared.GetIdentityProviderByIdentifierResponse
	InternalErrorException                  *interface{}
	InvalidParameterException               *interface{}
	NotAuthorizedException                  *interface{}
	ResourceNotFoundException               *interface{}
	StatusCode                              int64
	TooManyRequestsException                *interface{}
}
