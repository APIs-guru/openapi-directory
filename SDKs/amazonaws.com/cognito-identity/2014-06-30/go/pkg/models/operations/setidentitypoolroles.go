package operations

import (
	"openapi/pkg/models/shared"
)

type SetIdentityPoolRolesXAmzTargetEnum string

const (
	SetIdentityPoolRolesXAmzTargetEnumAwsCognitoIdentityServiceSetIdentityPoolRoles SetIdentityPoolRolesXAmzTargetEnum = "AWSCognitoIdentityService.SetIdentityPoolRoles"
)

type SetIdentityPoolRolesHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SetIdentityPoolRolesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SetIdentityPoolRolesRequest struct {
	Headers SetIdentityPoolRolesHeaders
	Request shared.SetIdentityPoolRolesInput `request:"mediaType=application/json"`
}

type SetIdentityPoolRolesResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalErrorException          *interface{}
	InvalidParameterException       *interface{}
	NotAuthorizedException          *interface{}
	ResourceConflictException       *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
