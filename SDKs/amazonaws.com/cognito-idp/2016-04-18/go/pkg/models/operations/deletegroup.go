package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteGroupXAmzTargetEnum string

const (
	DeleteGroupXAmzTargetEnumAwsCognitoIdentityProviderServiceDeleteGroup DeleteGroupXAmzTargetEnum = "AWSCognitoIdentityProviderService.DeleteGroup"
)

type DeleteGroupHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteGroupRequest struct {
	Headers DeleteGroupHeaders
	Request shared.DeleteGroupRequest `request:"mediaType=application/json"`
}

type DeleteGroupResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
