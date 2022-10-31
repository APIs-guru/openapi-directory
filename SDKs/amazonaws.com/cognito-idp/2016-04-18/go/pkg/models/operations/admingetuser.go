package operations

import (
	"openapi/pkg/models/shared"
)

type AdminGetUserXAmzTargetEnum string

const (
	AdminGetUserXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminGetUser AdminGetUserXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminGetUser"
)

type AdminGetUserHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminGetUserXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AdminGetUserRequest struct {
	Headers AdminGetUserHeaders
	Request shared.AdminGetUserRequest `request:"mediaType=application/json"`
}

type AdminGetUserResponse struct {
	AdminGetUserResponse      *shared.AdminGetUserResponse
	ContentType               string
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
	UserNotFoundException     *interface{}
}
