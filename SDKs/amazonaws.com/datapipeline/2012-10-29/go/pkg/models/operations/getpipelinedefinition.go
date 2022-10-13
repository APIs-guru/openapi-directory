package operations

import (
	"openapi/pkg/models/shared"
)

type GetPipelineDefinitionXAmzTargetEnum string

const (
	GetPipelineDefinitionXAmzTargetEnumDataPipelineGetPipelineDefinition GetPipelineDefinitionXAmzTargetEnum = "DataPipeline.GetPipelineDefinition"
)

type GetPipelineDefinitionHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPipelineDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetPipelineDefinitionRequest struct {
	Headers GetPipelineDefinitionHeaders
	Request shared.GetPipelineDefinitionInput `request:"mediaType=application/json"`
}

type GetPipelineDefinitionResponse struct {
	ContentType                 string
	GetPipelineDefinitionOutput *shared.GetPipelineDefinitionOutput
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	PipelineDeletedException    *interface{}
	PipelineNotFoundException   *interface{}
	StatusCode                  int64
}
