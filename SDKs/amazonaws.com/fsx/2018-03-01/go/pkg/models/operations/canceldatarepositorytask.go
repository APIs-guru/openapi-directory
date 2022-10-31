package operations

import (
	"openapi/pkg/models/shared"
)

type CancelDataRepositoryTaskXAmzTargetEnum string

const (
	CancelDataRepositoryTaskXAmzTargetEnumAwsSimbaAPIServiceV20180301CancelDataRepositoryTask CancelDataRepositoryTaskXAmzTargetEnum = "AWSSimbaAPIService_v20180301.CancelDataRepositoryTask"
)

type CancelDataRepositoryTaskHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelDataRepositoryTaskXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
