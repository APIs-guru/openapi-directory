package operations

import (
	"openapi/pkg/models/shared"
)

type ActivatePipelineXAmzTargetEnum string

const (
	ActivatePipelineXAmzTargetEnumDataPipelineActivatePipeline ActivatePipelineXAmzTargetEnum = "DataPipeline.ActivatePipeline"
)

type ActivatePipelineHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ActivatePipelineXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ActivatePipelineRequest struct {
	Headers ActivatePipelineHeaders
	Request shared.ActivatePipelineInput `request:"mediaType=application/json"`
}

type ActivatePipelineResponse struct {
	ActivatePipelineOutput    map[string]interface{}
	ContentType               string
	InternalServiceError      *interface{}
	InvalidRequestException   *interface{}
	PipelineDeletedException  *interface{}
	PipelineNotFoundException *interface{}
	StatusCode                int64
}
