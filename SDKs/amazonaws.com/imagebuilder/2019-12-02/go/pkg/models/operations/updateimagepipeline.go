package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateImagePipelineHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateImagePipelineRequestBodyImageTestsConfiguration struct {
	ImageTestsEnabled *bool  `json:"imageTestsEnabled,omitempty"`
	TimeoutMinutes    *int64 `json:"timeoutMinutes,omitempty"`
}

type UpdateImagePipelineRequestBodySchedule struct {
	PipelineExecutionStartCondition *shared.PipelineExecutionStartConditionEnum `json:"pipelineExecutionStartCondition,omitempty"`
	ScheduleExpression              *string                                     `json:"scheduleExpression,omitempty"`
	Timezone                        *string                                     `json:"timezone,omitempty"`
}

type UpdateImagePipelineRequestBodyStatusEnum string

const (
	UpdateImagePipelineRequestBodyStatusEnumDisabled UpdateImagePipelineRequestBodyStatusEnum = "DISABLED"
	UpdateImagePipelineRequestBodyStatusEnumEnabled  UpdateImagePipelineRequestBodyStatusEnum = "ENABLED"
)

type UpdateImagePipelineRequestBody struct {
	ClientToken                    string                                                 `json:"clientToken"`
	ContainerRecipeArn             *string                                                `json:"containerRecipeArn,omitempty"`
	Description                    *string                                                `json:"description,omitempty"`
	DistributionConfigurationArn   *string                                                `json:"distributionConfigurationArn,omitempty"`
	EnhancedImageMetadataEnabled   *bool                                                  `json:"enhancedImageMetadataEnabled,omitempty"`
	ImagePipelineArn               string                                                 `json:"imagePipelineArn"`
	ImageRecipeArn                 *string                                                `json:"imageRecipeArn,omitempty"`
	ImageTestsConfiguration        *UpdateImagePipelineRequestBodyImageTestsConfiguration `json:"imageTestsConfiguration,omitempty"`
	InfrastructureConfigurationArn string                                                 `json:"infrastructureConfigurationArn"`
	Schedule                       *UpdateImagePipelineRequestBodySchedule                `json:"schedule,omitempty"`
	Status                         *UpdateImagePipelineRequestBodyStatusEnum              `json:"status,omitempty"`
}

type UpdateImagePipelineRequest struct {
	Headers UpdateImagePipelineHeaders
	Request UpdateImagePipelineRequestBody `request:"mediaType=application/json"`
}

type UpdateImagePipelineResponse struct {
	CallRateLimitExceededException       *interface{}
	ClientException                      *interface{}
	ContentType                          string
	ForbiddenException                   *interface{}
	IdempotentParameterMismatchException *interface{}
	InvalidRequestException              *interface{}
	ResourceInUseException               *interface{}
	ServiceException                     *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
	UpdateImagePipelineResponse          *shared.UpdateImagePipelineResponse
}
