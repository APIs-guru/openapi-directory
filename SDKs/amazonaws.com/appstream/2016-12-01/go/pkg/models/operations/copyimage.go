package operations

import (
	"openapi/pkg/models/shared"
)

type CopyImageXAmzTargetEnum string

const (
	CopyImageXAmzTargetEnumPhotonAdminProxyServiceCopyImage CopyImageXAmzTargetEnum = "PhotonAdminProxyService.CopyImage"
)

type CopyImageHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CopyImageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CopyImageRequest struct {
	Headers CopyImageHeaders
	Request shared.CopyImageRequest `request:"mediaType=application/json"`
}

type CopyImageResponse struct {
	ContentType                    string
	CopyImageResponse              *shared.CopyImageResponse
	IncompatibleImageException     *interface{}
	InvalidAccountStatusException  *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotAvailableException  *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
