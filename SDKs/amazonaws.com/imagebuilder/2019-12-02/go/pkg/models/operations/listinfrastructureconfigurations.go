package operations

import (
	"openapi/pkg/models/shared"
)

type ListInfrastructureConfigurationsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListInfrastructureConfigurationsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListInfrastructureConfigurationsRequestBody struct {
	Filters    []shared.Filter `json:"filters,omitempty"`
	MaxResults *int64          `json:"maxResults,omitempty"`
	NextToken  *string         `json:"nextToken,omitempty"`
}

type ListInfrastructureConfigurationsRequest struct {
	QueryParams ListInfrastructureConfigurationsQueryParams
	Headers     ListInfrastructureConfigurationsHeaders
	Request     ListInfrastructureConfigurationsRequestBody `request:"mediaType=application/json"`
}

type ListInfrastructureConfigurationsResponse struct {
	CallRateLimitExceededException           *interface{}
	ClientException                          *interface{}
	ContentType                              string
	ForbiddenException                       *interface{}
	InvalidPaginationTokenException          *interface{}
	InvalidRequestException                  *interface{}
	ListInfrastructureConfigurationsResponse *shared.ListInfrastructureConfigurationsResponse
	ServiceException                         *interface{}
	ServiceUnavailableException              *interface{}
	StatusCode                               int64
}
