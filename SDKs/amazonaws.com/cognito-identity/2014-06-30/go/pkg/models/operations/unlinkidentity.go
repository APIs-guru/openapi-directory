package operations

import (
	"openapi/pkg/models/shared"
)

type UnlinkIdentityXAmzTargetEnum string

const (
	UnlinkIdentityXAmzTargetEnumAwsCognitoIdentityServiceUnlinkIdentity UnlinkIdentityXAmzTargetEnum = "AWSCognitoIdentityService.UnlinkIdentity"
)

type UnlinkIdentityHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UnlinkIdentityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UnlinkIdentityRequest struct {
	Headers UnlinkIdentityHeaders
	Request shared.UnlinkIdentityInput `request:"mediaType=application/json"`
}

type UnlinkIdentityResponse struct {
	ContentType               string
	ExternalServiceException  *interface{}
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotAuthorizedException    *interface{}
	ResourceConflictException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
