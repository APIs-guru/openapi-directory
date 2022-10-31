package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDirectoryXAmzTargetEnum string

const (
	CreateDirectoryXAmzTargetEnumDirectoryService20150416CreateDirectory CreateDirectoryXAmzTargetEnum = "DirectoryService_20150416.CreateDirectory"
)

type CreateDirectoryHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDirectoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateDirectoryRequest struct {
	Headers CreateDirectoryHeaders
	Request shared.CreateDirectoryRequest `request:"mediaType=application/json"`
}

type CreateDirectoryResponse struct {
	ClientException                 *interface{}
	ContentType                     string
	CreateDirectoryResult           *shared.CreateDirectoryResult
	DirectoryLimitExceededException *interface{}
	InvalidParameterException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
}
