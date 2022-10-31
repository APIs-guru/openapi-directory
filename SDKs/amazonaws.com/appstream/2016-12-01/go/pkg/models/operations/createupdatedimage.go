package operations

import (
	"openapi/pkg/models/shared"
)

type CreateUpdatedImageXAmzTargetEnum string

const (
	CreateUpdatedImageXAmzTargetEnumPhotonAdminProxyServiceCreateUpdatedImage CreateUpdatedImageXAmzTargetEnum = "PhotonAdminProxyService.CreateUpdatedImage"
)

type CreateUpdatedImageHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateUpdatedImageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
