package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteIdentityProviderXAmzTargetEnum string

const (
	DeleteIdentityProviderXAmzTargetEnumAwsCognitoIdentityProviderServiceDeleteIdentityProvider DeleteIdentityProviderXAmzTargetEnum = "AWSCognitoIdentityProviderService.DeleteIdentityProvider"
)

type DeleteIdentityProviderHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteIdentityProviderXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteIdentityProviderRequest struct {
	Headers DeleteIdentityProviderHeaders
	Request shared.DeleteIdentityProviderRequest `request:"mediaType=application/json"`
}

type DeleteIdentityProviderResponse struct {
	ContentType                          string
	InternalErrorException               *interface{}
	InvalidParameterException            *interface{}
	NotAuthorizedException               *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
	TooManyRequestsException             *interface{}
	UnsupportedIdentityProviderException *interface{}
}
