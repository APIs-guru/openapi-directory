package operations

import (
	"openapi/pkg/models/shared"
)

type CreateImagePipelineHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateImagePipelineRequestBodyImageTestsConfiguration
// Image tests configuration.
type CreateImagePipelineRequestBodyImageTestsConfiguration struct {
	ImageTestsEnabled *bool  `json:"imageTestsEnabled,omitempty"`
	TimeoutMinutes    *int64 `json:"timeoutMinutes,omitempty"`
}

// CreateImagePipelineRequestBodySchedule
// A schedule configures how often and when a pipeline will automatically create a new image.
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
