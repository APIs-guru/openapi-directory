package operations

import (
	"openapi/pkg/models/shared"
)

type ListDistributionConfigurationsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListDistributionConfigurationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDistributionConfigurationsRequestBody struct {
	Filters    []shared.Filter `json:"filters"`
	MaxResults *int64          `json:"maxResults"`
	NextToken  *string         `json:"nextToken"`
}

type ListDistributionConfigurationsRequest struct {
	QueryParams ListDistributionConfigurationsQueryParams
	Headers     ListDistributionConfigurationsHeaders
	Request     ListDistributionConfigurationsRequestBody `request:"mediaType=application/json"`
}

type ListDistributionConfigurationsResponse struct {
	CallRateLimitExceededException         *interface{}
	ClientException                        *interface{}
	ContentType                            string
	ForbiddenException                     *interface{}
	InvalidPaginationTokenException        *interface{}
	InvalidRequestException                *interface{}
	ListDistributionConfigurationsResponse *shared.ListDistributionConfigurationsResponse
	ServiceException                       *interface{}
	ServiceUnavailableException            *interface{}
	StatusCode                             int64
}
