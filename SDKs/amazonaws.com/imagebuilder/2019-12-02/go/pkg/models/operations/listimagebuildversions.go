package operations

import (
	"openapi/pkg/models/shared"
)

type ListImageBuildVersionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListImageBuildVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListImageBuildVersionsRequestBody struct {
	Filters         []shared.Filter `json:"filters,omitempty"`
	ImageVersionArn string          `json:"imageVersionArn"`
	MaxResults      *int64          `json:"maxResults,omitempty"`
	NextToken       *string         `json:"nextToken,omitempty"`
}

type ListImageBuildVersionsRequest struct {
	QueryParams ListImageBuildVersionsQueryParams
	Headers     ListImageBuildVersionsHeaders
	Request     ListImageBuildVersionsRequestBody `request:"mediaType=application/json"`
}

type ListImageBuildVersionsResponse struct {
	CallRateLimitExceededException  *interface{}
	ClientException                 *interface{}
	ContentType                     string
	ForbiddenException              *interface{}
	InvalidPaginationTokenException *interface{}
	InvalidRequestException         *interface{}
	ListImageBuildVersionsResponse  *shared.ListImageBuildVersionsResponse
	ServiceException                *interface{}
	ServiceUnavailableException     *interface{}
	StatusCode                      int64
}
