package operations

import (
	"openapi/pkg/models/shared"
)

type AddIPRoutesXAmzTargetEnum string

const (
	AddIPRoutesXAmzTargetEnumDirectoryService20150416AddIPRoutes AddIPRoutesXAmzTargetEnum = "DirectoryService_20150416.AddIpRoutes"
)

type AddIPRoutesHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AddIPRoutesXAmzTargetEnum `header:"name=X-Amz-Target"`
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
