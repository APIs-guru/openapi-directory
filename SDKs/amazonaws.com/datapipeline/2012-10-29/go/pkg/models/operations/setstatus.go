package operations

import (
	"openapi/pkg/models/shared"
)

type SetStatusXAmzTargetEnum string

const (
	SetStatusXAmzTargetEnumDataPipelineSetStatus SetStatusXAmzTargetEnum = "DataPipeline.SetStatus"
)

type SetStatusHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SetStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SetStatusRequest struct {
	Headers SetStatusHeaders
	Request shared.SetStatusInput `request:"mediaType=application/json"`
}

type SetStatusResponse struct {
	ContentType               string
	InternalServiceError      *interface{}
	InvalidRequestException   *interface{}
	PipelineDeletedException  *interface{}
	PipelineNotFoundException *interface{}
	StatusCode                int64
}
