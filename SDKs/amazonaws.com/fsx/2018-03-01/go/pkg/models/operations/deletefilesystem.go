package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFileSystemXAmzTargetEnum string

const (
	DeleteFileSystemXAmzTargetEnumAwsSimbaAPIServiceV20180301DeleteFileSystem DeleteFileSystemXAmzTargetEnum = "AWSSimbaAPIService_v20180301.DeleteFileSystem"
)

type DeleteFileSystemHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteFileSystemXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteFileSystemRequest struct {
	Headers DeleteFileSystemHeaders
	Request shared.DeleteFileSystemRequest `request:"mediaType=application/json"`
}

type DeleteFileSystemResponse struct {
	BadRequest                 *interface{}
	ContentType                string
	DeleteFileSystemResponse   *shared.DeleteFileSystemResponse
	FileSystemNotFound         *interface{}
	IncompatibleParameterError *interface{}
	InternalServerError        *interface{}
	ServiceLimitExceeded       *interface{}
	StatusCode                 int64
}
