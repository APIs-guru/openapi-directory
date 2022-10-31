package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDirectoryConfigXAmzTargetEnum string

const (
	DeleteDirectoryConfigXAmzTargetEnumPhotonAdminProxyServiceDeleteDirectoryConfig DeleteDirectoryConfigXAmzTargetEnum = "PhotonAdminProxyService.DeleteDirectoryConfig"
)

type DeleteDirectoryConfigHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDirectoryConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteDirectoryConfigRequest struct {
	Headers DeleteDirectoryConfigHeaders
	Request shared.DeleteDirectoryConfigRequest `request:"mediaType=application/json"`
}

type DeleteDirectoryConfigResponse struct {
	ContentType                 string
	DeleteDirectoryConfigResult map[string]interface{}
	ResourceInUseException      *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
}
