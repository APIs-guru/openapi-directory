package operations

import (
	"openapi/pkg/models/shared"
)

type PutPipelineDefinitionXAmzTargetEnum string

const (
	PutPipelineDefinitionXAmzTargetEnumDataPipelinePutPipelineDefinition PutPipelineDefinitionXAmzTargetEnum = "DataPipeline.PutPipelineDefinition"
)

type PutPipelineDefinitionHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutPipelineDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
