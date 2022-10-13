package operations

import (
	"openapi/pkg/models/shared"
)

type RevokeTokenXAmzTargetEnum string

const (
	RevokeTokenXAmzTargetEnumAwsCognitoIdentityProviderServiceRevokeToken RevokeTokenXAmzTargetEnum = "AWSCognitoIdentityProviderService.RevokeToken"
)

type RevokeTokenHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RevokeTokenXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RevokeTokenRequest struct {
	Headers RevokeTokenHeaders
	Request shared.RevokeTokenRequest `request:"mediaType=application/json"`
}

type RevokeTokenResponse struct {
	ContentType                   string
	InternalErrorException        *interface{}
	InvalidParameterException     *interface{}
	RevokeTokenResponse           map[string]interface{}
	StatusCode                    int64
	TooManyRequestsException      *interface{}
	UnauthorizedException         *interface{}
	UnsupportedOperationException *interface{}
	UnsupportedTokenTypeException *interface{}
}
