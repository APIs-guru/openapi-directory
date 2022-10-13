package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForResourcePathParams struct {
	ResourceID string `pathParam:"style=simple,explode=false,name=ResourceId"`
}

type ListTagsForResourceQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTagsForResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListTagsForResourceRequest struct {
	PathParams  ListTagsForResourcePathParams
	QueryParams ListTagsForResourceQueryParams
	Headers     ListTagsForResourceHeaders
}

type ListTagsForResourceResponse struct {
	AccessPointNotFound         *interface{}
	BadRequest                  *interface{}
	ContentType                 string
	FileSystemNotFound          *interface{}
	InternalServerError         *interface{}
	ListTagsForResourceResponse *shared.ListTagsForResourceResponse
	StatusCode                  int64
}
