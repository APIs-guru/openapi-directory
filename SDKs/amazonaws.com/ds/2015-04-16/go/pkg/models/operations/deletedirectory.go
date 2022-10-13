package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDirectoryXAmzTargetEnum string

const (
	DeleteDirectoryXAmzTargetEnumDirectoryService20150416DeleteDirectory DeleteDirectoryXAmzTargetEnum = "DirectoryService_20150416.DeleteDirectory"
)

type DeleteDirectoryHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDirectoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDirectoryRequest struct {
	Headers DeleteDirectoryHeaders
	Request shared.DeleteDirectoryRequest `request:"mediaType=application/json"`
}

type DeleteDirectoryResponse struct {
	ClientException             *interface{}
	ContentType                 string
	DeleteDirectoryResult       *shared.DeleteDirectoryResult
	EntityDoesNotExistException *interface{}
	ServiceException            *interface{}
	StatusCode                  int64
}
