package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveIPRoutesXAmzTargetEnum string

const (
	RemoveIPRoutesXAmzTargetEnumDirectoryService20150416RemoveIPRoutes RemoveIPRoutesXAmzTargetEnum = "DirectoryService_20150416.RemoveIpRoutes"
)

type RemoveIPRoutesHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveIPRoutesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RemoveIPRoutesRequest struct {
	Headers RemoveIPRoutesHeaders
	Request shared.RemoveIPRoutesRequest `request:"mediaType=application/json"`
}

type RemoveIPRoutesResponse struct {
	ClientException               *interface{}
	ContentType                   string
	DirectoryUnavailableException *interface{}
	EntityDoesNotExistException   *interface{}
	InvalidParameterException     *interface{}
	RemoveIPRoutesResult          map[string]interface{}
	ServiceException              *interface{}
	StatusCode                    int64
}
