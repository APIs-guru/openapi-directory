package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type StartPipelineReprocessingPathParams struct {
	PipelineName string `pathParam:"style=simple,explode=false,name=pipelineName"`
}

type StartPipelineReprocessingHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// StartPipelineReprocessingRequestBodyChannelMessages
// Specifies one or more sets of channel messages.
type StartPipelineReprocessingRequestBodyChannelMessages struct {
	S3Paths []string `json:"s3Paths,omitempty"`
}

type StartPipelineReprocessingRequestBody struct {
	ChannelMessages *StartPipelineReprocessingRequestBodyChannelMessages `json:"channelMessages,omitempty"`
	EndTime         *time.Time                                           `json:"endTime,omitempty"`
	StartTime       *time.Time                                           `json:"startTime,omitempty"`
}

type StartPipelineReprocessingRequest struct {
	PathParams StartPipelineReprocessingPathParams
	Headers    StartPipelineReprocessingHeaders
	Request    StartPipelineReprocessingRequestBody `request:"mediaType=application/json"`
}

type StartPipelineReprocessingResponse struct {
	ContentType                       string
	InternalFailureException          *interface{}
	InvalidRequestException           *interface{}
	ResourceAlreadyExistsException    *interface{}
	ResourceNotFoundException         *interface{}
	ServiceUnavailableException       *interface{}
	StartPipelineReprocessingResponse *shared.StartPipelineReprocessingResponse
	StatusCode                        int64
	ThrottlingException               *interface{}
}
