package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePipelineXAmzTargetEnum string

const (
	DeletePipelineXAmzTargetEnumDataPipelineDeletePipeline DeletePipelineXAmzTargetEnum = "DataPipeline.DeletePipeline"
)

type DeletePipelineHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePipelineXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeletePipelineRequest struct {
	Headers DeletePipelineHeaders
	Request shared.DeletePipelineInput `request:"mediaType=application/json"`
}

type DeletePipelineResponse struct {
	ContentType               string
	InternalServiceError      *interface{}
	InvalidRequestException   *interface{}
	PipelineNotFoundException *interface{}
	StatusCode                int64
}
