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
	ImageTestsEnabled *bool  `json:"imageTestsEnabled"`
	TimeoutMinutes    *int64 `json:"timeoutMinutes"`
}

type CreateImagePipelineRequestBodySchedule struct {
	PipelineExecutionStartCondition *shared.PipelineExecutionStartConditionEnum `json:"pipelineExecutionStartCondition"`
	ScheduleExpression              *string                                     `json:"scheduleExpression"`
	Timezone                        *string                                     `json:"timezone"`
}

type CreateImagePipelineRequestBodyStatusEnum string

const (
	CreateImagePipelineRequestBodyStatusEnumDisabled CreateImagePipelineRequestBodyStatusEnum = "DISABLED"
	CreateImagePipelineRequestBodyStatusEnumEnabled  CreateImagePipelineRequestBodyStatusEnum = "ENABLED"
)

type CreateImagePipelineRequestBody struct {
	ClientToken                    string                                                 `json:"clientToken"`
	ContainerRecipeArn             *string                                                `json:"containerRecipeArn"`
	Description                    *string                                                `json:"description"`
	DistributionConfigurationArn   *string                                                `json:"distributionConfigurationArn"`
	EnhancedImageMetadataEnabled   *bool                                                  `json:"enhancedImageMetadataEnabled"`
	ImageRecipeArn                 *string                                                `json:"imageRecipeArn"`
	ImageTestsConfiguration        *CreateImagePipelineRequestBodyImageTestsConfiguration `json:"imageTestsConfiguration"`
	InfrastructureConfigurationArn string                                                 `json:"infrastructureConfigurationArn"`
	Name                           string                                                 `json:"name"`
	Schedule                       *CreateImagePipelineRequestBodySchedule                `json:"schedule"`
	Status                         *CreateImagePipelineRequestBodyStatusEnum              `json:"status"`
	Tags                           map[string]string                                      `json:"tags"`
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
