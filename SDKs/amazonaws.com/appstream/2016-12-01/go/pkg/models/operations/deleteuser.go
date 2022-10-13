package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserXAmzTargetEnum string

const (
	DeleteUserXAmzTargetEnumPhotonAdminProxyServiceDeleteUser DeleteUserXAmzTargetEnum = "PhotonAdminProxyService.DeleteUser"
)

type DeleteUserHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteUserXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteUserRequest struct {
	Headers DeleteUserHeaders
	Request shared.DeleteUserRequest `request:"mediaType=application/json"`
}

type DeleteUserResponse struct {
	ContentType               string
	DeleteUserResult          map[string]interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
