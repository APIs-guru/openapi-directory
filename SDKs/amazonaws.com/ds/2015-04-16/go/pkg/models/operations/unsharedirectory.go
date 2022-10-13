package operations

import (
	"openapi/pkg/models/shared"
)

type UnshareDirectoryXAmzTargetEnum string

const (
	UnshareDirectoryXAmzTargetEnumDirectoryService20150416UnshareDirectory UnshareDirectoryXAmzTargetEnum = "DirectoryService_20150416.UnshareDirectory"
)

type UnshareDirectoryHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UnshareDirectoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UnshareDirectoryRequest struct {
	Headers UnshareDirectoryHeaders
	Request shared.UnshareDirectoryRequest `request:"mediaType=application/json"`
}

type UnshareDirectoryResponse struct {
	ClientException             *interface{}
	ContentType                 string
	DirectoryNotSharedException *interface{}
	EntityDoesNotExistException *interface{}
	InvalidTargetException      *interface{}
	ServiceException            *interface{}
	StatusCode                  int64
	UnshareDirectoryResult      *shared.UnshareDirectoryResult
}
