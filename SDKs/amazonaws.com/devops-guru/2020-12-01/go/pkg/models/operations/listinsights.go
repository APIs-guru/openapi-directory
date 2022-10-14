package operations

import (
	"openapi/pkg/models/shared"
)

type ListInsightsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListInsightsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListInsightsRequestBodyStatusFilter struct {
	Any     *shared.ListInsightsAnyStatusFilter     `json:"Any,omitempty"`
	Closed  *shared.ListInsightsClosedStatusFilter  `json:"Closed,omitempty"`
	Ongoing *shared.ListInsightsOngoingStatusFilter `json:"Ongoing,omitempty"`
}

type ListInsightsRequestBody struct {
	MaxResults   *int64                              `json:"MaxResults,omitempty"`
	NextToken    *string                             `json:"NextToken,omitempty"`
	StatusFilter ListInsightsRequestBodyStatusFilter `json:"StatusFilter"`
}

type ListInsightsRequest struct {
	QueryParams ListInsightsQueryParams
	Headers     ListInsightsHeaders
	Request     ListInsightsRequestBody `request:"mediaType=application/json"`
}

type ListInsightsResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	InternalServerException *interface{}
	ListInsightsResponse    *shared.ListInsightsResponse
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
