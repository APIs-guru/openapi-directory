package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDataRepositoryTaskXAmzTargetEnum string

const (
	CreateDataRepositoryTaskXAmzTargetEnumAwsSimbaAPIServiceV20180301CreateDataRepositoryTask CreateDataRepositoryTaskXAmzTargetEnum = "AWSSimbaAPIService_v20180301.CreateDataRepositoryTask"
)

type CreateDataRepositoryTaskHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDataRepositoryTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDataRepositoryTaskRequest struct {
	Headers CreateDataRepositoryTaskHeaders
	Request shared.CreateDataRepositoryTaskRequest `request:"mediaType=application/json"`
}

type CreateDataRepositoryTaskResponse struct {
	BadRequest                       *interface{}
	ContentType                      string
	CreateDataRepositoryTaskResponse *shared.CreateDataRepositoryTaskResponse
	DataRepositoryTaskExecuting      *interface{}
	FileSystemNotFound               *interface{}
	IncompatibleParameterError       *interface{}
	InternalServerError              *interface{}
	ServiceLimitExceeded             *interface{}
	StatusCode                       int64
	UnsupportedOperation             *interface{}
}
