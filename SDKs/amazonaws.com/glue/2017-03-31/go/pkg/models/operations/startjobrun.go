package operations

import (
	"openapi/pkg/models/shared"
)

type StartJobRunXAmzTargetEnum string

const (
	StartJobRunXAmzTargetEnumAwsGlueStartJobRun StartJobRunXAmzTargetEnum = "AWSGlue.StartJobRun"
)

type StartJobRunHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartJobRunXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartJobRunRequest struct {
	Headers StartJobRunHeaders
	Request shared.StartJobRunRequest `request:"mediaType=application/json"`
}

type StartJobRunResponse struct {
	ConcurrentRunsExceededException      *interface{}
	ContentType                          string
	EntityNotFoundException              *interface{}
	InternalServiceException             *interface{}
	InvalidInputException                *interface{}
	OperationTimeoutException            *interface{}
	ResourceNumberLimitExceededException *interface{}
	StartJobRunResponse                  *shared.StartJobRunResponse
	StatusCode                           int64
}
