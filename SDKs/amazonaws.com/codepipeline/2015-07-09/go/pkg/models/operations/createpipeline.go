package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePipelineXAmzTargetEnum string

const (
	CreatePipelineXAmzTargetEnumCodePipeline20150709CreatePipeline CreatePipelineXAmzTargetEnum = "CodePipeline_20150709.CreatePipeline"
)

type CreatePipelineHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePipelineXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreatePipelineRequest struct {
	Headers CreatePipelineHeaders
	Request shared.CreatePipelineInput `request:"mediaType=application/json"`
}

type CreatePipelineResponse struct {
	ConcurrentModificationException    *interface{}
	ContentType                        string
	CreatePipelineOutput               *shared.CreatePipelineOutput
	InvalidActionDeclarationException  *interface{}
	InvalidBlockerDeclarationException *interface{}
	InvalidStageDeclarationException   *interface{}
	InvalidStructureException          *interface{}
	InvalidTagsException               *interface{}
	LimitExceededException             *interface{}
	PipelineNameInUseException         *interface{}
	StatusCode                         int64
	TooManyTagsException               *interface{}
	ValidationException                *interface{}
}
