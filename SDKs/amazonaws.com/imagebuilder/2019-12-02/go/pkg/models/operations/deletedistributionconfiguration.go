package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDistributionConfigurationQueryParams struct {
	DistributionConfigurationArn string `queryParam:"style=form,explode=true,name=distributionConfigurationArn"`
}

type DeleteDistributionConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteDistributionConfigurationRequest struct {
	QueryParams DeleteDistributionConfigurationQueryParams
	Headers     DeleteDistributionConfigurationHeaders
}

type DeleteDistributionConfigurationResponse struct {
	CallRateLimitExceededException          *interface{}
	ClientException                         *interface{}
	ContentType                             string
	DeleteDistributionConfigurationResponse *shared.DeleteDistributionConfigurationResponse
	ForbiddenException                      *interface{}
	InvalidRequestException                 *interface{}
	ResourceDependencyException             *interface{}
	ServiceException                        *interface{}
	ServiceUnavailableException             *interface{}
	StatusCode                              int64
}
