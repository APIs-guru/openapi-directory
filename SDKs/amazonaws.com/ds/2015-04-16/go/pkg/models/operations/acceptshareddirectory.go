package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptSharedDirectoryXAmzTargetEnum string

const (
	AcceptSharedDirectoryXAmzTargetEnumDirectoryService20150416AcceptSharedDirectory AcceptSharedDirectoryXAmzTargetEnum = "DirectoryService_20150416.AcceptSharedDirectory"
)

type AcceptSharedDirectoryHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AcceptSharedDirectoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AcceptSharedDirectoryRequest struct {
	Headers AcceptSharedDirectoryHeaders
	Request shared.AcceptSharedDirectoryRequest `request:"mediaType=application/json"`
}

type AcceptSharedDirectoryResponse struct {
	AcceptSharedDirectoryResult     *shared.AcceptSharedDirectoryResult
	ClientException                 *interface{}
	ContentType                     string
	DirectoryAlreadySharedException *interface{}
	EntityDoesNotExistException     *interface{}
	InvalidParameterException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
}
