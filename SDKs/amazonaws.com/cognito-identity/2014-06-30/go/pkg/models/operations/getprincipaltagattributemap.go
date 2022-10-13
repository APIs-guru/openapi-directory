package operations

import (
	"openapi/pkg/models/shared"
)

type GetPrincipalTagAttributeMapXAmzTargetEnum string

const (
	GetPrincipalTagAttributeMapXAmzTargetEnumAwsCognitoIdentityServiceGetPrincipalTagAttributeMap GetPrincipalTagAttributeMapXAmzTargetEnum = "AWSCognitoIdentityService.GetPrincipalTagAttributeMap"
)

type GetPrincipalTagAttributeMapHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPrincipalTagAttributeMapXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetPrincipalTagAttributeMapRequest struct {
	Headers GetPrincipalTagAttributeMapHeaders
	Request shared.GetPrincipalTagAttributeMapInput `request:"mediaType=application/json"`
}

type GetPrincipalTagAttributeMapResponse struct {
	ContentType                         string
	GetPrincipalTagAttributeMapResponse *shared.GetPrincipalTagAttributeMapResponse
	InternalErrorException              *interface{}
	InvalidParameterException           *interface{}
	NotAuthorizedException              *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
	TooManyRequestsException            *interface{}
}
