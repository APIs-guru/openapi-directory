package operations

import (
	"openapi/pkg/models/shared"
)

type StartWorkflowRunXAmzTargetEnum string

const (
	StartWorkflowRunXAmzTargetEnumAwsGlueStartWorkflowRun StartWorkflowRunXAmzTargetEnum = "AWSGlue.StartWorkflowRun"
)

type StartWorkflowRunHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartWorkflowRunXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartWorkflowRunRequest struct {
	Headers StartWorkflowRunHeaders
	Request shared.StartWorkflowRunRequest `request:"mediaType=application/json"`
}

type StartWorkflowRunResponse struct {
	ConcurrentRunsExceededException      *interface{}
	ContentType                          string
	EntityNotFoundException              *interface{}
	InternalServiceException             *interface{}
	InvalidInputException                *interface{}
	OperationTimeoutException            *interface{}
	ResourceNumberLimitExceededException *interface{}
	StartWorkflowRunResponse             *shared.StartWorkflowRunResponse
	StatusCode                           int64
}
