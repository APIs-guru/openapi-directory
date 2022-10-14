package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDistributionConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateDistributionConfigurationRequestBody struct {
	ClientToken                  string                `json:"clientToken"`
	Description                  *string               `json:"description,omitempty"`
	DistributionConfigurationArn string                `json:"distributionConfigurationArn"`
	Distributions                []shared.Distribution `json:"distributions"`
}

type UpdateDistributionConfigurationRequest struct {
	Headers UpdateDistributionConfigurationHeaders
	Request UpdateDistributionConfigurationRequestBody `request:"mediaType=application/json"`
}

type UpdateDistributionConfigurationResponse struct {
	CallRateLimitExceededException          *interface{}
	ClientException                         *interface{}
	ContentType                             string
	ForbiddenException                      *interface{}
	IdempotentParameterMismatchException    *interface{}
	InvalidParameterCombinationException    *interface{}
	InvalidRequestException                 *interface{}
	ResourceInUseException                  *interface{}
	ServiceException                        *interface{}
	ServiceUnavailableException             *interface{}
	StatusCode                              int64
	UpdateDistributionConfigurationResponse *shared.UpdateDistributionConfigurationResponse
}
