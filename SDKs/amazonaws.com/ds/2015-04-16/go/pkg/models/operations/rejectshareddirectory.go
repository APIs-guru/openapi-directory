package operations

import (
	"openapi/pkg/models/shared"
)

type RejectSharedDirectoryXAmzTargetEnum string

const (
	RejectSharedDirectoryXAmzTargetEnumDirectoryService20150416RejectSharedDirectory RejectSharedDirectoryXAmzTargetEnum = "DirectoryService_20150416.RejectSharedDirectory"
)

type RejectSharedDirectoryHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RejectSharedDirectoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RejectSharedDirectoryRequest struct {
	Headers RejectSharedDirectoryHeaders
	Request shared.RejectSharedDirectoryRequest `request:"mediaType=application/json"`
}

type RejectSharedDirectoryResponse struct {
	ClientException                 *interface{}
	ContentType                     string
	DirectoryAlreadySharedException *interface{}
	EntityDoesNotExistException     *interface{}
	InvalidParameterException       *interface{}
	RejectSharedDirectoryResult     *shared.RejectSharedDirectoryResult
	ServiceException                *interface{}
	StatusCode                      int64
}
