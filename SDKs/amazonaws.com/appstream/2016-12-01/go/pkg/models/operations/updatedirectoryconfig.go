package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDirectoryConfigXAmzTargetEnum string

const (
	UpdateDirectoryConfigXAmzTargetEnumPhotonAdminProxyServiceUpdateDirectoryConfig UpdateDirectoryConfigXAmzTargetEnum = "PhotonAdminProxyService.UpdateDirectoryConfig"
)

type UpdateDirectoryConfigHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDirectoryConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateDirectoryConfigRequest struct {
	Headers UpdateDirectoryConfigHeaders
	Request shared.UpdateDirectoryConfigRequest `request:"mediaType=application/json"`
}

type UpdateDirectoryConfigResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InvalidRoleException            *interface{}
	OperationNotPermittedException  *interface{}
	ResourceInUseException          *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	UpdateDirectoryConfigResult     *shared.UpdateDirectoryConfigResult
}
