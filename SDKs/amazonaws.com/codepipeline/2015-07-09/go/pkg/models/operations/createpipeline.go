package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePipelineXAmzTargetEnum string

const (
	CreatePipelineXAmzTargetEnumCodePipeline20150709CreatePipeline CreatePipelineXAmzTargetEnum = "CodePipeline_20150709.CreatePipeline"
)

type CreatePipelineHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePipelineXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
