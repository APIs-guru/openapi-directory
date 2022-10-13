package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectDirectoryXAmzTargetEnum string

const (
	ConnectDirectoryXAmzTargetEnumDirectoryService20150416ConnectDirectory ConnectDirectoryXAmzTargetEnum = "DirectoryService_20150416.ConnectDirectory"
)

type ConnectDirectoryHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ConnectDirectoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ConnectDirectoryRequest struct {
	Headers ConnectDirectoryHeaders
	Request shared.ConnectDirectoryRequest `request:"mediaType=application/json"`
}

type ConnectDirectoryResponse struct {
	ClientException                 *interface{}
	ConnectDirectoryResult          *shared.ConnectDirectoryResult
	ContentType                     string
	DirectoryLimitExceededException *interface{}
	InvalidParameterException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
}
