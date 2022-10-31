package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePipelineXAmzTargetEnum string

const (
	DeletePipelineXAmzTargetEnumCodePipeline20150709DeletePipeline DeletePipelineXAmzTargetEnum = "CodePipeline_20150709.DeletePipeline"
)

type DeletePipelineHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePipelineXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeletePipelineRequest struct {
	Headers DeletePipelineHeaders
	Request shared.DeletePipelineInput `request:"mediaType=application/json"`
}

type DeletePipelineResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	StatusCode                      int64
	ValidationException             *interface{}
}
