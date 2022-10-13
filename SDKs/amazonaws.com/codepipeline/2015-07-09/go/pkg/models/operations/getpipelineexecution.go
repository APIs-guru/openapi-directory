package operations

import (
	"openapi/pkg/models/shared"
)

type GetPipelineExecutionXAmzTargetEnum string

const (
	GetPipelineExecutionXAmzTargetEnumCodePipeline20150709GetPipelineExecution GetPipelineExecutionXAmzTargetEnum = "CodePipeline_20150709.GetPipelineExecution"
)

type GetPipelineExecutionHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPipelineExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetPipelineExecutionRequest struct {
	Headers GetPipelineExecutionHeaders
	Request shared.GetPipelineExecutionInput `request:"mediaType=application/json"`
}

type GetPipelineExecutionResponse struct {
	ContentType                        string
	GetPipelineExecutionOutput         *shared.GetPipelineExecutionOutput
	PipelineExecutionNotFoundException *interface{}
	PipelineNotFoundException          *interface{}
	StatusCode                         int64
	ValidationException                *interface{}
}
