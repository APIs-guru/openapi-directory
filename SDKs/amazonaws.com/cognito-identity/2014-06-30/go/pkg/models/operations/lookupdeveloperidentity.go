package operations

import (
	"openapi/pkg/models/shared"
)

type LookupDeveloperIdentityXAmzTargetEnum string

const (
	LookupDeveloperIdentityXAmzTargetEnumAwsCognitoIdentityServiceLookupDeveloperIdentity LookupDeveloperIdentityXAmzTargetEnum = "AWSCognitoIdentityService.LookupDeveloperIdentity"
)

type LookupDeveloperIdentityHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        LookupDeveloperIdentityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type LookupDeveloperIdentityRequest struct {
	Headers LookupDeveloperIdentityHeaders
	Request shared.LookupDeveloperIdentityInput `request:"mediaType=application/json"`
}

type LookupDeveloperIdentityResponse struct {
	ContentType                     string
	InternalErrorException          *interface{}
	InvalidParameterException       *interface{}
	LookupDeveloperIdentityResponse *shared.LookupDeveloperIdentityResponse
	NotAuthorizedException          *interface{}
	ResourceConflictException       *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
