package operations

import (
	"openapi/pkg/models/shared"
)

type SetTaskStatusXAmzTargetEnum string

const (
	SetTaskStatusXAmzTargetEnumDataPipelineSetTaskStatus SetTaskStatusXAmzTargetEnum = "DataPipeline.SetTaskStatus"
)

type SetTaskStatusHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SetTaskStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SetTaskStatusRequest struct {
	Headers SetTaskStatusHeaders
	Request shared.SetTaskStatusInput `request:"mediaType=application/json"`
}

type SetTaskStatusResponse struct {
	ContentType               string
	InternalServiceError      *interface{}
	InvalidRequestException   *interface{}
	PipelineDeletedException  *interface{}
	PipelineNotFoundException *interface{}
	SetTaskStatusOutput       map[string]interface{}
	StatusCode                int64
	TaskNotFoundException     *interface{}
}
