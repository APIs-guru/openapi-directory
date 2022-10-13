package operations

import (
	"openapi/pkg/models/shared"
)

type GetPipelineStateXAmzTargetEnum string

const (
	GetPipelineStateXAmzTargetEnumCodePipeline20150709GetPipelineState GetPipelineStateXAmzTargetEnum = "CodePipeline_20150709.GetPipelineState"
)

type GetPipelineStateHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPipelineStateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetPipelineStateRequest struct {
	Headers GetPipelineStateHeaders
	Request shared.GetPipelineStateInput `request:"mediaType=application/json"`
}

type GetPipelineStateResponse struct {
	ContentType               string
	GetPipelineStateOutput    *shared.GetPipelineStateOutput
	PipelineNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
