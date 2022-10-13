package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type SearchInsightsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type SearchInsightsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SearchInsightsRequestBodyFilters struct {
	ResourceCollection *shared.ResourceCollection   `json:"ResourceCollection"`
	ServiceCollection  *shared.ServiceCollection    `json:"ServiceCollection"`
	Severities         []shared.InsightSeverityEnum `json:"Severities"`
	Statuses           []shared.InsightStatusEnum   `json:"Statuses"`
}

type SearchInsightsRequestBodyStartTimeRange struct {
	FromTime *time.Time `json:"FromTime"`
	ToTime   *time.Time `json:"ToTime"`
}

type SearchInsightsRequestBodyTypeEnum string

const (
	SearchInsightsRequestBodyTypeEnumReactive  SearchInsightsRequestBodyTypeEnum = "REACTIVE"
	SearchInsightsRequestBodyTypeEnumProactive SearchInsightsRequestBodyTypeEnum = "PROACTIVE"
)

type SearchInsightsRequestBody struct {
	Filters        *SearchInsightsRequestBodyFilters       `json:"Filters"`
	MaxResults     *int64                                  `json:"MaxResults"`
	NextToken      *string                                 `json:"NextToken"`
	StartTimeRange SearchInsightsRequestBodyStartTimeRange `json:"StartTimeRange"`
	Type           SearchInsightsRequestBodyTypeEnum       `json:"Type"`
}

type SearchInsightsRequest struct {
	QueryParams SearchInsightsQueryParams
	Headers     SearchInsightsHeaders
	Request     SearchInsightsRequestBody `request:"mediaType=application/json"`
}

type SearchInsightsResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	InternalServerException *interface{}
	SearchInsightsResponse  *shared.SearchInsightsResponse
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
