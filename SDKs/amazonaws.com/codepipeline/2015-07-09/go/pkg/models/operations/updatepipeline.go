package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePipelineXAmzTargetEnum string

const (
	UpdatePipelineXAmzTargetEnumCodePipeline20150709UpdatePipeline UpdatePipelineXAmzTargetEnum = "CodePipeline_20150709.UpdatePipeline"
)

type UpdatePipelineHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdatePipelineXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdatePipelineRequest struct {
	Headers UpdatePipelineHeaders
	Request shared.UpdatePipelineInput `request:"mediaType=application/json"`
}

type UpdatePipelineResponse struct {
	ContentType                        string
	InvalidActionDeclarationException  *interface{}
	InvalidBlockerDeclarationException *interface{}
	InvalidStageDeclarationException   *interface{}
	InvalidStructureException          *interface{}
	LimitExceededException             *interface{}
	StatusCode                         int64
	UpdatePipelineOutput               *shared.UpdatePipelineOutput
	ValidationException                *interface{}
}
