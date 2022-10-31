package operations

import (
	"openapi/pkg/models/shared"
)

type GetPipelineXAmzTargetEnum string

const (
	GetPipelineXAmzTargetEnumCodePipeline20150709GetPipeline GetPipelineXAmzTargetEnum = "CodePipeline_20150709.GetPipeline"
)

type GetPipelineHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPipelineXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetPipelineRequest struct {
	Headers GetPipelineHeaders
	Request shared.GetPipelineInput `request:"mediaType=application/json"`
}

type GetPipelineResponse struct {
	ContentType                      string
	GetPipelineOutput                *shared.GetPipelineOutput
	PipelineNotFoundException        *interface{}
	PipelineVersionNotFoundException *interface{}
	StatusCode                       int64
	ValidationException              *interface{}
}
