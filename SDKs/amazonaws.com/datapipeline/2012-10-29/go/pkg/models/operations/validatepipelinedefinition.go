package operations

import (
	"openapi/pkg/models/shared"
)

type ValidatePipelineDefinitionXAmzTargetEnum string

const (
	ValidatePipelineDefinitionXAmzTargetEnumDataPipelineValidatePipelineDefinition ValidatePipelineDefinitionXAmzTargetEnum = "DataPipeline.ValidatePipelineDefinition"
)

type ValidatePipelineDefinitionHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ValidatePipelineDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ValidatePipelineDefinitionRequest struct {
	Headers ValidatePipelineDefinitionHeaders
	Request shared.ValidatePipelineDefinitionInput `request:"mediaType=application/json"`
}

type ValidatePipelineDefinitionResponse struct {
	ContentType                      string
	InternalServiceError             *interface{}
	InvalidRequestException          *interface{}
	PipelineDeletedException         *interface{}
	PipelineNotFoundException        *interface{}
	StatusCode                       int64
	ValidatePipelineDefinitionOutput *shared.ValidatePipelineDefinitionOutput
}
