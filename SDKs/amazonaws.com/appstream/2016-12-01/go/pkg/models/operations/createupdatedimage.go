package operations

import (
	"openapi/pkg/models/shared"
)

type CreateUpdatedImageXAmzTargetEnum string

const (
	CreateUpdatedImageXAmzTargetEnumPhotonAdminProxyServiceCreateUpdatedImage CreateUpdatedImageXAmzTargetEnum = "PhotonAdminProxyService.CreateUpdatedImage"
)

type CreateUpdatedImageHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateUpdatedImageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateUpdatedImageRequest struct {
	Headers CreateUpdatedImageHeaders
	Request shared.CreateUpdatedImageRequest `request:"mediaType=application/json"`
}

type CreateUpdatedImageResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	CreateUpdatedImageResult        *shared.CreateUpdatedImageResult
	IncompatibleImageException      *interface{}
	InvalidAccountStatusException   *interface{}
	LimitExceededException          *interface{}
	OperationNotPermittedException  *interface{}
	ResourceAlreadyExistsException  *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
