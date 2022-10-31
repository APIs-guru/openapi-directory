package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateIdentityProviderXAmzTargetEnum string

const (
	UpdateIdentityProviderXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateIdentityProvider UpdateIdentityProviderXAmzTargetEnum = "AWSCognitoIdentityProviderService.UpdateIdentityProvider"
)

type UpdateIdentityProviderHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateIdentityProviderXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateIdentityProviderRequest struct {
	Headers UpdateIdentityProviderHeaders
	Request shared.UpdateIdentityProviderRequest `request:"mediaType=application/json"`
}

type UpdateIdentityProviderResponse struct {
	ContentType                          string
	InternalErrorException               *interface{}
	InvalidParameterException            *interface{}
	NotAuthorizedException               *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
	TooManyRequestsException             *interface{}
	UnsupportedIdentityProviderException *interface{}
	UpdateIdentityProviderResponse       *shared.UpdateIdentityProviderResponse
}
