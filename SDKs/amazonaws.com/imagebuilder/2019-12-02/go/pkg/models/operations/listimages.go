package operations

import (
	"openapi/pkg/models/shared"
)

type ListImagesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListImagesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListImagesRequestBodyOwnerEnum string

const (
	ListImagesRequestBodyOwnerEnumSelf   ListImagesRequestBodyOwnerEnum = "Self"
	ListImagesRequestBodyOwnerEnumShared ListImagesRequestBodyOwnerEnum = "Shared"
	ListImagesRequestBodyOwnerEnumAmazon ListImagesRequestBodyOwnerEnum = "Amazon"
)

type ListImagesRequestBody struct {
	ByName            *bool                           `json:"byName"`
	Filters           []shared.Filter                 `json:"filters"`
	IncludeDeprecated *bool                           `json:"includeDeprecated"`
	MaxResults        *int64                          `json:"maxResults"`
	NextToken         *string                         `json:"nextToken"`
	Owner             *ListImagesRequestBodyOwnerEnum `json:"owner"`
}

type ListImagesRequest struct {
	QueryParams ListImagesQueryParams
	Headers     ListImagesHeaders
	Request     ListImagesRequestBody `request:"mediaType=application/json"`
}

type ListImagesResponse struct {
	CallRateLimitExceededException  *interface{}
	ClientException                 *interface{}
	ContentType                     string
	ForbiddenException              *interface{}
	InvalidPaginationTokenException *interface{}
	InvalidRequestException         *interface{}
	ListImagesResponse              *shared.ListImagesResponse
	ServiceException                *interface{}
	ServiceUnavailableException     *interface{}
	StatusCode                      int64
}
