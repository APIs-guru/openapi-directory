package operations

import (
	"openapi/pkg/models/shared"
)

type GetCredentialsForIdentityXAmzTargetEnum string

const (
	GetCredentialsForIdentityXAmzTargetEnumAwsCognitoIdentityServiceGetCredentialsForIdentity GetCredentialsForIdentityXAmzTargetEnum = "AWSCognitoIdentityService.GetCredentialsForIdentity"
)

type GetCredentialsForIdentityHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCredentialsForIdentityXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetCredentialsForIdentityRequest struct {
	Headers GetCredentialsForIdentityHeaders
	Request shared.GetCredentialsForIdentityInput `request:"mediaType=application/json"`
}

type GetCredentialsForIdentityResponse struct {
	ContentType                               string
	ExternalServiceException                  *interface{}
	GetCredentialsForIdentityResponse         *shared.GetCredentialsForIdentityResponse
	InternalErrorException                    *interface{}
	InvalidIdentityPoolConfigurationException *interface{}
	InvalidParameterException                 *interface{}
	NotAuthorizedException                    *interface{}
	ResourceConflictException                 *interface{}
	ResourceNotFoundException                 *interface{}
	StatusCode                                int64
	TooManyRequestsException                  *interface{}
}
