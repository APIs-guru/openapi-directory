package operations

import (
	"openapi/pkg/models/shared"
)

type ListFlowsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListFlowsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListFlowsRequestBody struct {
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
}

type ListFlowsRequest struct {
	QueryParams ListFlowsQueryParams
	Headers     ListFlowsHeaders
	Request     ListFlowsRequestBody `request:"mediaType=application/json"`
}

type ListFlowsResponse struct {
	ContentType             string
	InternalServerException *interface{}
	ListFlowsResponse       *shared.ListFlowsResponse
	StatusCode              int64
	ValidationException     *interface{}
}
