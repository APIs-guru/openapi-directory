package operations

import (
	"openapi/pkg/models/shared"
)

type ListImageRecipesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListImageRecipesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListImageRecipesRequestBodyOwnerEnum string

const (
	ListImageRecipesRequestBodyOwnerEnumSelf   ListImageRecipesRequestBodyOwnerEnum = "Self"
	ListImageRecipesRequestBodyOwnerEnumShared ListImageRecipesRequestBodyOwnerEnum = "Shared"
	ListImageRecipesRequestBodyOwnerEnumAmazon ListImageRecipesRequestBodyOwnerEnum = "Amazon"
)

type ListImageRecipesRequestBody struct {
	Filters    []shared.Filter                       `json:"filters,omitempty"`
	MaxResults *int64                                `json:"maxResults,omitempty"`
	NextToken  *string                               `json:"nextToken,omitempty"`
	Owner      *ListImageRecipesRequestBodyOwnerEnum `json:"owner,omitempty"`
}

type ListImageRecipesRequest struct {
	QueryParams ListImageRecipesQueryParams
	Headers     ListImageRecipesHeaders
	Request     ListImageRecipesRequestBody `request:"mediaType=application/json"`
}

type ListImageRecipesResponse struct {
	CallRateLimitExceededException  *interface{}
	ClientException                 *interface{}
	ContentType                     string
	ForbiddenException              *interface{}
	InvalidPaginationTokenException *interface{}
	InvalidRequestException         *interface{}
	ListImageRecipesResponse        *shared.ListImageRecipesResponse
	ServiceException                *interface{}
	ServiceUnavailableException     *interface{}
	StatusCode                      int64
}
