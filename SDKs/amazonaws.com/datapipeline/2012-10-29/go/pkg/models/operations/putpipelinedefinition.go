package operations

import (
	"openapi/pkg/models/shared"
)

type PutPipelineDefinitionXAmzTargetEnum string

const (
	PutPipelineDefinitionXAmzTargetEnumDataPipelinePutPipelineDefinition PutPipelineDefinitionXAmzTargetEnum = "DataPipeline.PutPipelineDefinition"
)

type PutPipelineDefinitionHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutPipelineDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutPipelineDefinitionRequest struct {
	Headers PutPipelineDefinitionHeaders
	Request shared.PutPipelineDefinitionInput `request:"mediaType=application/json"`
}

type PutPipelineDefinitionResponse struct {
	ContentType                 string
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	PipelineDeletedException    *interface{}
	PipelineNotFoundException   *interface{}
	PutPipelineDefinitionOutput *shared.PutPipelineDefinitionOutput
	StatusCode                  int64
}
