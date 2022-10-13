package operations

import (
	"openapi/pkg/models/shared"
)

type ListEventTypesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListEventTypesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListEventTypesRequestBody struct {
	Filters    []shared.ListEventTypesFilter `json:"Filters"`
	MaxResults *int64                        `json:"MaxResults"`
	NextToken  *string                       `json:"NextToken"`
}

type ListEventTypesRequest struct {
	QueryParams ListEventTypesQueryParams
	Headers     ListEventTypesHeaders
	Request     ListEventTypesRequestBody `request:"mediaType=application/json"`
}

type ListEventTypesResponse struct {
	ContentType               string
	InvalidNextTokenException *interface{}
	ListEventTypesResult      *shared.ListEventTypesResult
	StatusCode                int64
	ValidationException       *interface{}
}
