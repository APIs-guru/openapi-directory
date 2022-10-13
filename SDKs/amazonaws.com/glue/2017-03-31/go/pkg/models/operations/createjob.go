package operations

import (
	"openapi/pkg/models/shared"
)

type CreateJobXAmzTargetEnum string

const (
	CreateJobXAmzTargetEnumAwsGlueCreateJob CreateJobXAmzTargetEnum = "AWSGlue.CreateJob"
)

type CreateJobHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateJobRequest struct {
	Headers CreateJobHeaders
	Request shared.CreateJobRequest `request:"mediaType=application/json"`
}

type CreateJobResponse struct {
	AlreadyExistsException               *interface{}
	ConcurrentModificationException      *interface{}
	ContentType                          string
	CreateJobResponse                    *shared.CreateJobResponse
	IdempotentParameterMismatchException *interface{}
	InternalServiceException             *interface{}
	InvalidInputException                *interface{}
	OperationTimeoutException            *interface{}
	ResourceNumberLimitExceededException *interface{}
	StatusCode                           int64
}
