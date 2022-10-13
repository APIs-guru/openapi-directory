package operations

import (
	"openapi/pkg/models/shared"
)

type ListGraphsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListGraphsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListGraphsRequestBody struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}

type ListGraphsRequest struct {
	QueryParams ListGraphsQueryParams
	Headers     ListGraphsHeaders
	Request     ListGraphsRequestBody `request:"mediaType=application/json"`
}

type ListGraphsResponse struct {
	ContentType             string
	InternalServerException *interface{}
	ListGraphsResponse      *shared.ListGraphsResponse
	StatusCode              int64
	ValidationException     *interface{}
}
