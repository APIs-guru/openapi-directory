package operations

import (
	"openapi/pkg/models/shared"
)

type CancelDataRepositoryTaskXAmzTargetEnum string

const (
	CancelDataRepositoryTaskXAmzTargetEnumAwsSimbaAPIServiceV20180301CancelDataRepositoryTask CancelDataRepositoryTaskXAmzTargetEnum = "AWSSimbaAPIService_v20180301.CancelDataRepositoryTask"
)

type CancelDataRepositoryTaskHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelDataRepositoryTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CancelDataRepositoryTaskRequest struct {
	Headers CancelDataRepositoryTaskHeaders
	Request shared.CancelDataRepositoryTaskRequest `request:"mediaType=application/json"`
}

type CancelDataRepositoryTaskResponse struct {
	BadRequest                       *interface{}
	CancelDataRepositoryTaskResponse *shared.CancelDataRepositoryTaskResponse
	ContentType                      string
	DataRepositoryTaskEnded          *interface{}
	DataRepositoryTaskNotFound       *interface{}
	InternalServerError              *interface{}
	StatusCode                       int64
	UnsupportedOperation             *interface{}
}
