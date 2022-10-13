package operations

import (
	"openapi/pkg/models/shared"
)

type ListComponentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListComponentsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListComponentsRequestBodyOwnerEnum string

const (
	ListComponentsRequestBodyOwnerEnumSelf   ListComponentsRequestBodyOwnerEnum = "Self"
	ListComponentsRequestBodyOwnerEnumShared ListComponentsRequestBodyOwnerEnum = "Shared"
	ListComponentsRequestBodyOwnerEnumAmazon ListComponentsRequestBodyOwnerEnum = "Amazon"
)

type ListComponentsRequestBody struct {
	ByName     *bool                               `json:"byName"`
	Filters    []shared.Filter                     `json:"filters"`
	MaxResults *int64                              `json:"maxResults"`
	NextToken  *string                             `json:"nextToken"`
	Owner      *ListComponentsRequestBodyOwnerEnum `json:"owner"`
}

type ListComponentsRequest struct {
	QueryParams ListComponentsQueryParams
	Headers     ListComponentsHeaders
	Request     ListComponentsRequestBody `request:"mediaType=application/json"`
}

type ListComponentsResponse struct {
	CallRateLimitExceededException  *interface{}
	ClientException                 *interface{}
	ContentType                     string
	ForbiddenException              *interface{}
	InvalidPaginationTokenException *interface{}
	InvalidRequestException         *interface{}
	ListComponentsResponse          *shared.ListComponentsResponse
	ServiceException                *interface{}
	ServiceUnavailableException     *interface{}
	StatusCode                      int64
}
