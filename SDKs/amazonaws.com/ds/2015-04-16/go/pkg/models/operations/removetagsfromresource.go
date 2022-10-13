package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveTagsFromResourceXAmzTargetEnum string

const (
	RemoveTagsFromResourceXAmzTargetEnumDirectoryService20150416RemoveTagsFromResource RemoveTagsFromResourceXAmzTargetEnum = "DirectoryService_20150416.RemoveTagsFromResource"
)

type RemoveTagsFromResourceHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveTagsFromResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RemoveTagsFromResourceRequest struct {
	Headers RemoveTagsFromResourceHeaders
	Request shared.RemoveTagsFromResourceRequest `request:"mediaType=application/json"`
}

type RemoveTagsFromResourceResponse struct {
	ClientException              *interface{}
	ContentType                  string
	EntityDoesNotExistException  *interface{}
	InvalidParameterException    *interface{}
	RemoveTagsFromResourceResult map[string]interface{}
	ServiceException             *interface{}
	StatusCode                   int64
}
