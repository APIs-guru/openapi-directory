package operations

import (
	"openapi/pkg/models/shared"
)

type ListEventsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListEventsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListEventsRequestBodyFilters struct {
	DataSource         *shared.EventDataSourceEnum `json:"DataSource"`
	EventClass         *shared.EventClassEnum      `json:"EventClass"`
	EventSource        *string                     `json:"EventSource"`
	EventTimeRange     *shared.EventTimeRange      `json:"EventTimeRange"`
	InsightID          *string                     `json:"InsightId"`
	ResourceCollection *shared.ResourceCollection  `json:"ResourceCollection"`
}

type ListEventsRequestBody struct {
	Filters    ListEventsRequestBodyFilters `json:"Filters"`
	MaxResults *int64                       `json:"MaxResults"`
	NextToken  *string                      `json:"NextToken"`
}

type ListEventsRequest struct {
	QueryParams ListEventsQueryParams
	Headers     ListEventsHeaders
	Request     ListEventsRequestBody `request:"mediaType=application/json"`
}

type ListEventsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListEventsResponse        *shared.ListEventsResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
