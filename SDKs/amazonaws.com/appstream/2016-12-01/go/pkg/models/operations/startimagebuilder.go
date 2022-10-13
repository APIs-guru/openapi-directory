package operations

import (
	"openapi/pkg/models/shared"
)

type StartImageBuilderXAmzTargetEnum string

const (
	StartImageBuilderXAmzTargetEnumPhotonAdminProxyServiceStartImageBuilder StartImageBuilderXAmzTargetEnum = "PhotonAdminProxyService.StartImageBuilder"
)

type StartImageBuilderHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartImageBuilderXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartImageBuilderRequest struct {
	Headers StartImageBuilderHeaders
	Request shared.StartImageBuilderRequest `request:"mediaType=application/json"`
}

type StartImageBuilderResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	IncompatibleImageException      *interface{}
	InvalidAccountStatusException   *interface{}
	ResourceNotAvailableException   *interface{}
	ResourceNotFoundException       *interface{}
	StartImageBuilderResult         *shared.StartImageBuilderResult
	StatusCode                      int64
}
