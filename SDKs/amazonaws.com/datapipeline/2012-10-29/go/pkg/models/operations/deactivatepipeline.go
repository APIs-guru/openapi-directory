package operations

import (
	"openapi/pkg/models/shared"
)

type DeactivatePipelineXAmzTargetEnum string

const (
	DeactivatePipelineXAmzTargetEnumDataPipelineDeactivatePipeline DeactivatePipelineXAmzTargetEnum = "DataPipeline.DeactivatePipeline"
)

type DeactivatePipelineHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeactivatePipelineXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeactivatePipelineRequest struct {
	Headers DeactivatePipelineHeaders
	Request shared.DeactivatePipelineInput `request:"mediaType=application/json"`
}

type DeactivatePipelineResponse struct {
	ContentType               string
	DeactivatePipelineOutput  map[string]interface{}
	InternalServiceError      *interface{}
	InvalidRequestException   *interface{}
	PipelineDeletedException  *interface{}
	PipelineNotFoundException *interface{}
	StatusCode                int64
}
