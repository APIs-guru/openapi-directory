package operations

import (
	"openapi/pkg/models/shared"
)

type GetPipelineDefinitionXAmzTargetEnum string

const (
	GetPipelineDefinitionXAmzTargetEnumDataPipelineGetPipelineDefinition GetPipelineDefinitionXAmzTargetEnum = "DataPipeline.GetPipelineDefinition"
)

type GetPipelineDefinitionHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPipelineDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
