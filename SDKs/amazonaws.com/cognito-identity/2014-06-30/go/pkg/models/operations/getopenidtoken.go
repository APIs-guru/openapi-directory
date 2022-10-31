package operations

import (
	"openapi/pkg/models/shared"
)

type GetOpenIDTokenXAmzTargetEnum string

const (
	GetOpenIDTokenXAmzTargetEnumAwsCognitoIdentityServiceGetOpenIDToken GetOpenIDTokenXAmzTargetEnum = "AWSCognitoIdentityService.GetOpenIdToken"
)

type GetOpenIDTokenHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetOpenIDTokenXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
