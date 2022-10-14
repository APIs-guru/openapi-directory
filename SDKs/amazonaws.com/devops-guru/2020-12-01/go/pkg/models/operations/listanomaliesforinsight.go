package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListAnomaliesForInsightPathParams struct {
	InsightID string `pathParam:"style=simple,explode=false,name=InsightId"`
}

type ListAnomaliesForInsightQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAnomaliesForInsightHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListAnomaliesForInsightRequestBodyStartTimeRange struct {
	FromTime *time.Time `json:"FromTime,omitempty"`
	ToTime   *time.Time `json:"ToTime,omitempty"`
}

type ListAnomaliesForInsightRequestBody struct {
	MaxResults     *int64                                            `json:"MaxResults,omitempty"`
	NextToken      *string                                           `json:"NextToken,omitempty"`
	StartTimeRange *ListAnomaliesForInsightRequestBodyStartTimeRange `json:"StartTimeRange,omitempty"`
}

type ListAnomaliesForInsightRequest struct {
	PathParams  ListAnomaliesForInsightPathParams
	QueryParams ListAnomaliesForInsightQueryParams
	Headers     ListAnomaliesForInsightHeaders
	Request     ListAnomaliesForInsightRequestBody `request:"mediaType=application/json"`
}

type ListAnomaliesForInsightResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	InternalServerException         *interface{}
	ListAnomaliesForInsightResponse *shared.ListAnomaliesForInsightResponse
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	ValidationException             *interface{}
}
