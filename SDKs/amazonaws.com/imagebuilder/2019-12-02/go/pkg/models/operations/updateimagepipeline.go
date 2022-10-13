package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateImagePipelineHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateImagePipelineRequestBodyImageTestsConfiguration struct {
	ImageTestsEnabled *bool  `json:"imageTestsEnabled"`
	TimeoutMinutes    *int64 `json:"timeoutMinutes"`
}

type UpdateImagePipelineRequestBodySchedule struct {
	PipelineExecutionStartCondition *shared.PipelineExecutionStartConditionEnum `json:"pipelineExecutionStartCondition"`
	ScheduleExpression              *string                                     `json:"scheduleExpression"`
	Timezone                        *string                                     `json:"timezone"`
}

type UpdateImagePipelineRequestBodyStatusEnum string

const (
	UpdateImagePipelineRequestBodyStatusEnumDisabled UpdateImagePipelineRequestBodyStatusEnum = "DISABLED"
	UpdateImagePipelineRequestBodyStatusEnumEnabled  UpdateImagePipelineRequestBodyStatusEnum = "ENABLED"
)

type UpdateImagePipelineRequestBody struct {
	ClientToken                    string                                                 `json:"clientToken"`
	ContainerRecipeArn             *string                                                `json:"containerRecipeArn"`
	Description                    *string                                                `json:"description"`
	DistributionConfigurationArn   *string                                                `json:"distributionConfigurationArn"`
	EnhancedImageMetadataEnabled   *bool                                                  `json:"enhancedImageMetadataEnabled"`
	ImagePipelineArn               string                                                 `json:"imagePipelineArn"`
	ImageRecipeArn                 *string                                                `json:"imageRecipeArn"`
	ImageTestsConfiguration        *UpdateImagePipelineRequestBodyImageTestsConfiguration `json:"imageTestsConfiguration"`
	InfrastructureConfigurationArn string                                                 `json:"infrastructureConfigurationArn"`
	Schedule                       *UpdateImagePipelineRequestBodySchedule                `json:"schedule"`
	Status                         *UpdateImagePipelineRequestBodyStatusEnum              `json:"status"`
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
