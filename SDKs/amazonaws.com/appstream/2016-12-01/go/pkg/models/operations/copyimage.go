package operations

import (
	"openapi/pkg/models/shared"
)

type CopyImageXAmzTargetEnum string

const (
	CopyImageXAmzTargetEnumPhotonAdminProxyServiceCopyImage CopyImageXAmzTargetEnum = "PhotonAdminProxyService.CopyImage"
)

type CopyImageHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CopyImageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
