package operations

import (
	"openapi/pkg/models/shared"
)

type StopImageBuilderXAmzTargetEnum string

const (
	StopImageBuilderXAmzTargetEnumPhotonAdminProxyServiceStopImageBuilder StopImageBuilderXAmzTargetEnum = "PhotonAdminProxyService.StopImageBuilder"
)

type StopImageBuilderHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopImageBuilderXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopImageBuilderRequest struct {
	Headers StopImageBuilderHeaders
	Request shared.StopImageBuilderRequest `request:"mediaType=application/json"`
}

type StopImageBuilderResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	OperationNotPermittedException  *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	StopImageBuilderResult          *shared.StopImageBuilderResult
}
