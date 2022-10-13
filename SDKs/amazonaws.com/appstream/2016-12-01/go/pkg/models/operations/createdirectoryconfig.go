package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDirectoryConfigXAmzTargetEnum string

const (
	CreateDirectoryConfigXAmzTargetEnumPhotonAdminProxyServiceCreateDirectoryConfig CreateDirectoryConfigXAmzTargetEnum = "PhotonAdminProxyService.CreateDirectoryConfig"
)

type CreateDirectoryConfigHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDirectoryConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDirectoryConfigRequest struct {
	Headers CreateDirectoryConfigHeaders
	Request shared.CreateDirectoryConfigRequest `request:"mediaType=application/json"`
}

type CreateDirectoryConfigResponse struct {
	ContentType                    string
	CreateDirectoryConfigResult    *shared.CreateDirectoryConfigResult
	InvalidAccountStatusException  *interface{}
	InvalidRoleException           *interface{}
	LimitExceededException         *interface{}
	OperationNotPermittedException *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
