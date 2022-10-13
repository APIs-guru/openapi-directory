package operations

import (
	"openapi/pkg/models/shared"
)

type ListGroupVersionsPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
}

type ListGroupVersionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListGroupVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListGroupVersionsRequest struct {
	PathParams  ListGroupVersionsPathParams
	QueryParams ListGroupVersionsQueryParams
	Headers     ListGroupVersionsHeaders
}

type ListGroupVersionsResponse struct {
	BadRequestException       *interface{}
	ContentType               string
	ListGroupVersionsResponse *shared.ListGroupVersionsResponse
	StatusCode                int64
}
