package operations

import (
	"openapi/pkg/models/shared"
)

type StopPipelineExecutionXAmzTargetEnum string

const (
	StopPipelineExecutionXAmzTargetEnumCodePipeline20150709StopPipelineExecution StopPipelineExecutionXAmzTargetEnum = "CodePipeline_20150709.StopPipelineExecution"
)

type StopPipelineExecutionHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopPipelineExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopPipelineExecutionRequest struct {
	Headers StopPipelineExecutionHeaders
	Request shared.StopPipelineExecutionInput `request:"mediaType=application/json"`
}

type StopPipelineExecutionResponse struct {
	ConflictException                      *interface{}
	ContentType                            string
	DuplicatedStopRequestException         *interface{}
	PipelineExecutionNotStoppableException *interface{}
	PipelineNotFoundException              *interface{}
	StatusCode                             int64
	StopPipelineExecutionOutput            *shared.StopPipelineExecutionOutput
	ValidationException                    *interface{}
}
