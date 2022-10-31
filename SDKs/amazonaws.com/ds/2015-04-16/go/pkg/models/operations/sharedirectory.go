package operations

import (
	"openapi/pkg/models/shared"
)

type ShareDirectoryXAmzTargetEnum string

const (
	ShareDirectoryXAmzTargetEnumDirectoryService20150416ShareDirectory ShareDirectoryXAmzTargetEnum = "DirectoryService_20150416.ShareDirectory"
)

type ShareDirectoryHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ShareDirectoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ShareDirectoryRequest struct {
	Headers ShareDirectoryHeaders
	Request shared.ShareDirectoryRequest `request:"mediaType=application/json"`
}

type ShareDirectoryResponse struct {
	AccessDeniedException           *interface{}
	ClientException                 *interface{}
	ContentType                     string
	DirectoryAlreadySharedException *interface{}
	EntityDoesNotExistException     *interface{}
	InvalidParameterException       *interface{}
	InvalidTargetException          *interface{}
	OrganizationsException          *interface{}
	ServiceException                *interface{}
	ShareDirectoryResult            *shared.ShareDirectoryResult
	ShareLimitExceededException     *interface{}
	StatusCode                      int64
	UnsupportedOperationException   *interface{}
}
