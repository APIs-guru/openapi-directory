package operations

import (
	"openapi/pkg/models/shared"
)

type AddIPRoutesXAmzTargetEnum string

const (
	AddIPRoutesXAmzTargetEnumDirectoryService20150416AddIPRoutes AddIPRoutesXAmzTargetEnum = "DirectoryService_20150416.AddIpRoutes"
)

type AddIPRoutesHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AddIPRoutesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AddIPRoutesRequest struct {
	Headers AddIPRoutesHeaders
	Request shared.AddIPRoutesRequest `request:"mediaType=application/json"`
}

type AddIPRoutesResponse struct {
	AddIPRoutesResult             map[string]interface{}
	ClientException               *interface{}
	ContentType                   string
	DirectoryUnavailableException *interface{}
	EntityAlreadyExistsException  *interface{}
	EntityDoesNotExistException   *interface{}
	InvalidParameterException     *interface{}
	IPRouteLimitExceededException *interface{}
	ServiceException              *interface{}
	StatusCode                    int64
}
