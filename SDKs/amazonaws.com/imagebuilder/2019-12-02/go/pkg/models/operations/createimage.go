package operations

import (
	"openapi/pkg/models/shared"
)

type CreateImageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateImageRequestBodyImageTestsConfiguration struct {
	ImageTestsEnabled *bool  `json:"imageTestsEnabled"`
	TimeoutMinutes    *int64 `json:"timeoutMinutes"`
}

type CreateImageRequestBody struct {
	ClientToken                    string                                         `json:"clientToken"`
	ContainerRecipeArn             *string                                        `json:"containerRecipeArn"`
	DistributionConfigurationArn   *string                                        `json:"distributionConfigurationArn"`
	EnhancedImageMetadataEnabled   *bool                                          `json:"enhancedImageMetadataEnabled"`
	ImageRecipeArn                 *string                                        `json:"imageRecipeArn"`
	ImageTestsConfiguration        *CreateImageRequestBodyImageTestsConfiguration `json:"imageTestsConfiguration"`
	InfrastructureConfigurationArn string                                         `json:"infrastructureConfigurationArn"`
	Tags                           map[string]string                              `json:"tags"`
}

type CreateImageRequest struct {
	Headers CreateImageHeaders
	Request CreateImageRequestBody `request:"mediaType=application/json"`
}

type CreateImageResponse struct {
	CallRateLimitExceededException       *interface{}
	ClientException                      *interface{}
	ContentType                          string
	CreateImageResponse                  *shared.CreateImageResponse
	ForbiddenException                   *interface{}
	IdempotentParameterMismatchException *interface{}
	InvalidRequestException              *interface{}
	ResourceInUseException               *interface{}
	ServiceException                     *interface{}
	ServiceQuotaExceededException        *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
}
