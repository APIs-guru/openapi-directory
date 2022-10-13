package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFileSystemXAmzTargetEnum string

const (
	DeleteFileSystemXAmzTargetEnumAwsSimbaAPIServiceV20180301DeleteFileSystem DeleteFileSystemXAmzTargetEnum = "AWSSimbaAPIService_v20180301.DeleteFileSystem"
)

type DeleteFileSystemHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteFileSystemXAmzTargetEnum `header:"name=X-Amz-Target"`
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
