package operations

import (
	"openapi/pkg/models/shared"
)

type ListImagesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListImagesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListImagesRequestBodyOwnerEnum string

const (
	ListImagesRequestBodyOwnerEnumSelf   ListImagesRequestBodyOwnerEnum = "Self"
	ListImagesRequestBodyOwnerEnumShared ListImagesRequestBodyOwnerEnum = "Shared"
	ListImagesRequestBodyOwnerEnumAmazon ListImagesRequestBodyOwnerEnum = "Amazon"
)

type ListImagesRequestBody struct {
	ByName            *bool                           `json:"byName,omitempty"`
	Filters           []shared.Filter                 `json:"filters,omitempty"`
	IncludeDeprecated *bool                           `json:"includeDeprecated,omitempty"`
	MaxResults        *int64                          `json:"maxResults,omitempty"`
	NextToken         *string                         `json:"nextToken,omitempty"`
	Owner             *ListImagesRequestBodyOwnerEnum `json:"owner,omitempty"`
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
