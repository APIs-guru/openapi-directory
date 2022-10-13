package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFileSystemXAmzTargetEnum string

const (
	CreateFileSystemXAmzTargetEnumAwsSimbaAPIServiceV20180301CreateFileSystem CreateFileSystemXAmzTargetEnum = "AWSSimbaAPIService_v20180301.CreateFileSystem"
)

type CreateFileSystemHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateFileSystemXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateFileSystemRequest struct {
	Headers CreateFileSystemHeaders
	Request shared.CreateFileSystemRequest `request:"mediaType=application/json"`
}

type CreateFileSystemResponse struct {
	ActiveDirectoryError            *interface{}
	BadRequest                      *interface{}
	ContentType                     string
	CreateFileSystemResponse        *shared.CreateFileSystemResponse
	IncompatibleParameterError      *interface{}
	InternalServerError             *interface{}
	InvalidExportPath               *interface{}
	InvalidImportPath               *interface{}
	InvalidNetworkSettings          *interface{}
	InvalidPerUnitStorageThroughput *interface{}
	MissingFileSystemConfiguration  *interface{}
	ServiceLimitExceeded            *interface{}
	StatusCode                      int64
}
