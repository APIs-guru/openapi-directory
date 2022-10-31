package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGroupXAmzTargetEnum string

const (
	UpdateGroupXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateGroup UpdateGroupXAmzTargetEnum = "AWSCognitoIdentityProviderService.UpdateGroup"
)

type UpdateGroupHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateGroupRequest struct {
	Headers UpdateGroupHeaders
	Request shared.UpdateGroupRequest `request:"mediaType=application/json"`
}

type UpdateGroupResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
	UpdateGroupResponse       *shared.UpdateGroupResponse
}
