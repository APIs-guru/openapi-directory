package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveRegionXAmzTargetEnum string

const (
	RemoveRegionXAmzTargetEnumDirectoryService20150416RemoveRegion RemoveRegionXAmzTargetEnum = "DirectoryService_20150416.RemoveRegion"
)

type RemoveRegionHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveRegionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RemoveRegionRequest struct {
	Headers RemoveRegionHeaders
	Request shared.RemoveRegionRequest `request:"mediaType=application/json"`
}

type RemoveRegionResponse struct {
	AccessDeniedException          *interface{}
	ClientException                *interface{}
	ContentType                    string
	DirectoryDoesNotExistException *interface{}
	DirectoryUnavailableException  *interface{}
	RemoveRegionResult             map[string]interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	UnsupportedOperationException  *interface{}
}
