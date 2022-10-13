package operations

import (
	"openapi/pkg/models/shared"
)

type StartMlEvaluationTaskRunXAmzTargetEnum string

const (
	StartMlEvaluationTaskRunXAmzTargetEnumAwsGlueStartMlEvaluationTaskRun StartMlEvaluationTaskRunXAmzTargetEnum = "AWSGlue.StartMLEvaluationTaskRun"
)

type StartMlEvaluationTaskRunHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartMlEvaluationTaskRunXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartMlEvaluationTaskRunRequest struct {
	Headers StartMlEvaluationTaskRunHeaders
	Request shared.StartMlEvaluationTaskRunRequest `request:"mediaType=application/json"`
}

type StartMlEvaluationTaskRunResponse struct {
	ConcurrentRunsExceededException  *interface{}
	ContentType                      string
	EntityNotFoundException          *interface{}
	InternalServiceException         *interface{}
	InvalidInputException            *interface{}
	MlTransformNotReadyException     *interface{}
	OperationTimeoutException        *interface{}
	StartMlEvaluationTaskRunResponse *shared.StartMlEvaluationTaskRunResponse
	StatusCode                       int64
}
