package operations

import (
	"openapi/pkg/models/shared"
)

type GetOpenIDTokenXAmzTargetEnum string

const (
	GetOpenIDTokenXAmzTargetEnumAwsCognitoIdentityServiceGetOpenIDToken GetOpenIDTokenXAmzTargetEnum = "AWSCognitoIdentityService.GetOpenIdToken"
)

type GetOpenIDTokenHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetOpenIDTokenXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetOpenIDTokenRequest struct {
	Headers GetOpenIDTokenHeaders
	Request shared.GetOpenIDTokenInput `request:"mediaType=application/json"`
}

type GetOpenIDTokenResponse struct {
	ContentType               string
	ExternalServiceException  *interface{}
	GetOpenIDTokenResponse    *shared.GetOpenIDTokenResponse
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotAuthorizedException    *interface{}
	ResourceConflictException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
