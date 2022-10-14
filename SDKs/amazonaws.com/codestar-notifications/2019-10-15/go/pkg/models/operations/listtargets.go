package operations

import (
	"openapi/pkg/models/shared"
)

type ListTargetsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTargetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListTargetsRequestBody struct {
	Filters    []shared.ListTargetsFilter `json:"Filters,omitempty"`
	MaxResults *int64                     `json:"MaxResults,omitempty"`
	NextToken  *string                    `json:"NextToken,omitempty"`
}

type ListTargetsRequest struct {
	QueryParams ListTargetsQueryParams
	Headers     ListTargetsHeaders
	Request     ListTargetsRequestBody `request:"mediaType=application/json"`
}

type ListTargetsResponse struct {
	ContentType               string
	InvalidNextTokenException *interface{}
	ListTargetsResult         *shared.ListTargetsResult
	StatusCode                int64
	ValidationException       *interface{}
}
