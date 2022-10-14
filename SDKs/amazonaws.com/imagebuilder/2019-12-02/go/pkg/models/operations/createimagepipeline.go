package operations

import (
	"openapi/pkg/models/shared"
)

type CreateImagePipelineHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateImagePipelineRequestBodyImageTestsConfiguration struct {
	ImageTestsEnabled *bool  `json:"imageTestsEnabled,omitempty"`
	TimeoutMinutes    *int64 `json:"timeoutMinutes,omitempty"`
}

type CreateImagePipelineRequestBodySchedule struct {
	PipelineExecutionStartCondition *shared.PipelineExecutionStartConditionEnum `json:"pipelineExecutionStartCondition,omitempty"`
	ScheduleExpression              *string                                     `json:"scheduleExpression,omitempty"`
	Timezone                        *string                                     `json:"timezone,omitempty"`
}

type CreateImagePipelineRequestBodyStatusEnum string

const (
	CreateImagePipelineRequestBodyStatusEnumDisabled CreateImagePipelineRequestBodyStatusEnum = "DISABLED"
	CreateImagePipelineRequestBodyStatusEnumEnabled  CreateImagePipelineRequestBodyStatusEnum = "ENABLED"
)

type CreateImagePipelineRequestBody struct {
	ClientToken                    string                                                 `json:"clientToken"`
	ContainerRecipeArn             *string                                                `json:"containerRecipeArn,omitempty"`
	Description                    *string                                                `json:"description,omitempty"`
	DistributionConfigurationArn   *string                                                `json:"distributionConfigurationArn,omitempty"`
	EnhancedImageMetadataEnabled   *bool                                                  `json:"enhancedImageMetadataEnabled,omitempty"`
	ImageRecipeArn                 *string                                                `json:"imageRecipeArn,omitempty"`
	ImageTestsConfiguration        *CreateImagePipelineRequestBodyImageTestsConfiguration `json:"imageTestsConfiguration,omitempty"`
	InfrastructureConfigurationArn string                                                 `json:"infrastructureConfigurationArn"`
	Name                           string                                                 `json:"name"`
	Schedule                       *CreateImagePipelineRequestBodySchedule                `json:"schedule,omitempty"`
	Status                         *CreateImagePipelineRequestBodyStatusEnum              `json:"status,omitempty"`
	Tags                           map[string]string                                      `json:"tags,omitempty"`
}

type CreateImagePipelineRequest struct {
	Headers CreateImagePipelineHeaders
	Request CreateImagePipelineRequestBody `request:"mediaType=application/json"`
}

type CreateImagePipelineResponse struct {
	CallRateLimitExceededException       *interface{}
	ClientException                      *interface{}
	ContentType                          string
	CreateImagePipelineResponse          *shared.CreateImagePipelineResponse
	ForbiddenException                   *interface{}
	IdempotentParameterMismatchException *interface{}
	InvalidRequestException              *interface{}
	ResourceAlreadyExistsException       *interface{}
	ResourceInUseException               *interface{}
	ServiceException                     *interface{}
	ServiceQuotaExceededException        *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
}
