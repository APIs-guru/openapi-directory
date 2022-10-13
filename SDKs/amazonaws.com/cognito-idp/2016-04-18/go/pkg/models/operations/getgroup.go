package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupXAmzTargetEnum string

const (
	GetGroupXAmzTargetEnumAwsCognitoIdentityProviderServiceGetGroup GetGroupXAmzTargetEnum = "AWSCognitoIdentityProviderService.GetGroup"
)

type GetGroupHeaders struct {
	XAmzAlgorithm     *string                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetGroupRequest struct {
	Headers GetGroupHeaders
	Request shared.GetGroupRequest `request:"mediaType=application/json"`
}

type GetGroupResponse struct {
	ContentType               string
	GetGroupResponse          *shared.GetGroupResponse
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
