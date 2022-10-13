package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteImageXAmzTargetEnum string

const (
	DeleteImageXAmzTargetEnumPhotonAdminProxyServiceDeleteImage DeleteImageXAmzTargetEnum = "PhotonAdminProxyService.DeleteImage"
)

type DeleteImageHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteImageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteImageRequest struct {
	Headers DeleteImageHeaders
	Request shared.DeleteImageRequest `request:"mediaType=application/json"`
}

type DeleteImageResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteImageResult               *shared.DeleteImageResult
	OperationNotPermittedException  *interface{}
	ResourceInUseException          *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
