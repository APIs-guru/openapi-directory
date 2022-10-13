package operations

import (
	"openapi/pkg/models/shared"
)

type RetryStageExecutionXAmzTargetEnum string

const (
	RetryStageExecutionXAmzTargetEnumCodePipeline20150709RetryStageExecution RetryStageExecutionXAmzTargetEnum = "CodePipeline_20150709.RetryStageExecution"
)

type RetryStageExecutionHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RetryStageExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RetryStageExecutionRequest struct {
	Headers RetryStageExecutionHeaders
	Request shared.RetryStageExecutionInput `request:"mediaType=application/json"`
}

type RetryStageExecutionResponse struct {
	ConflictException                   *interface{}
	ContentType                         string
	NotLatestPipelineExecutionException *interface{}
	PipelineNotFoundException           *interface{}
	RetryStageExecutionOutput           *shared.RetryStageExecutionOutput
	StageNotFoundException              *interface{}
	StageNotRetryableException          *interface{}
	StatusCode                          int64
	ValidationException                 *interface{}
}
