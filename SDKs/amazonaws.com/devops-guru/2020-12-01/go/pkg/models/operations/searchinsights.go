package operations

import (
"time"
"openapi/pkg/models/shared")

type SearchInsightsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type SearchInsightsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type SearchInsightsRequestBodyFilters struct {
    ResourceCollection *shared.ResourceCollection `json:"ResourceCollection,omitempty"`
    ServiceCollection *shared.ServiceCollection `json:"ServiceCollection,omitempty"`
    Severities []shared.InsightSeverityEnum `json:"Severities,omitempty"`
    Statuses []shared.InsightStatusEnum `json:"Statuses,omitempty"`
    
}

type SearchInsightsRequestBodyStartTimeRange struct {
    FromTime *time.Time `json:"FromTime,omitempty"`
    ToTime *time.Time `json:"ToTime,omitempty"`
    
}


type SearchInsightsRequestBodyTypeEnum string

const (
    SearchInsightsRequestBodyTypeEnumReactive SearchInsightsRequestBodyTypeEnum = "REACTIVE"
SearchInsightsRequestBodyTypeEnumProactive SearchInsightsRequestBodyTypeEnum = "PROACTIVE"
)


type SearchInsightsRequestBody struct {
    Filters *SearchInsightsRequestBodyFilters `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    StartTimeRange SearchInsightsRequestBodyStartTimeRange `json:"StartTimeRange"`
    Type SearchInsightsRequestBodyTypeEnum `json:"Type"`
    
}

type SearchInsightsRequest struct {
    QueryParams SearchInsightsQueryParams 
    Headers SearchInsightsHeaders 
    Request SearchInsightsRequestBody `request:"mediaType=application/json"`
    
}

type SearchInsightsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    SearchInsightsResponse *shared.SearchInsightsResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

