package operations

import (
	"openapi/pkg/models/shared"
)

type GetOpenIDTokenForDeveloperIdentityXAmzTargetEnum string

const (
	GetOpenIDTokenForDeveloperIdentityXAmzTargetEnumAwsCognitoIdentityServiceGetOpenIDTokenForDeveloperIdentity GetOpenIDTokenForDeveloperIdentityXAmzTargetEnum = "AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity"
)

type GetOpenIDTokenForDeveloperIdentityHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetOpenIDTokenForDeveloperIdentityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetOpenIDTokenForDeveloperIdentityRequest struct {
	Headers GetOpenIDTokenForDeveloperIdentityHeaders
	Request shared.GetOpenIDTokenForDeveloperIdentityInput `request:"mediaType=application/json"`
}

type GetOpenIDTokenForDeveloperIdentityResponse struct {
	ContentType                                string
	DeveloperUserAlreadyRegisteredException    *interface{}
	GetOpenIDTokenForDeveloperIdentityResponse *shared.GetOpenIDTokenForDeveloperIdentityResponse
	InternalErrorException                     *interface{}
	InvalidParameterException                  *interface{}
	NotAuthorizedException                     *interface{}
	ResourceConflictException                  *interface{}
	ResourceNotFoundException                  *interface{}
	StatusCode                                 int64
	TooManyRequestsException                   *interface{}
}
