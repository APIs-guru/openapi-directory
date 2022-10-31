package operations

import (
"openapi/pkg/models/shared")

type ListEventsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListEventsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListEventsRequestBodyFilters struct {
    DataSource *shared.EventDataSourceEnum `json:"DataSource,omitempty"`
    EventClass *shared.EventClassEnum `json:"EventClass,omitempty"`
    EventSource *string `json:"EventSource,omitempty"`
    EventTimeRange *shared.EventTimeRange `json:"EventTimeRange,omitempty"`
    InsightID *string `json:"InsightId,omitempty"`
    ResourceCollection *shared.ResourceCollection `json:"ResourceCollection,omitempty"`
    
}

type ListEventsRequestBody struct {
    Filters ListEventsRequestBodyFilters `json:"Filters"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

type ListEventsRequest struct {
    QueryParams ListEventsQueryParams 
    Headers ListEventsHeaders 
    Request ListEventsRequestBody `request:"mediaType=application/json"`
    
}

type ListEventsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListEventsResponse *shared.ListEventsResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

