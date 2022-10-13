package operations

import (
	"openapi/pkg/models/shared"
)

type GetDistributionConfigurationQueryParams struct {
	DistributionConfigurationArn string `queryParam:"style=form,explode=true,name=distributionConfigurationArn"`
}

type GetDistributionConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDistributionConfigurationRequest struct {
	QueryParams GetDistributionConfigurationQueryParams
	Headers     GetDistributionConfigurationHeaders
}

type GetDistributionConfigurationResponse struct {
	CallRateLimitExceededException       *interface{}
	ClientException                      *interface{}
	ContentType                          string
	ForbiddenException                   *interface{}
	GetDistributionConfigurationResponse *shared.GetDistributionConfigurationResponse
	InvalidRequestException              *interface{}
	ServiceException                     *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
}
