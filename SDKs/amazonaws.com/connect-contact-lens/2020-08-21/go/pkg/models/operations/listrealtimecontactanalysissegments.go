package operations

import (
"openapi/pkg/models/shared")

type ListRealtimeContactAnalysisSegmentsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListRealtimeContactAnalysisSegmentsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListRealtimeContactAnalysisSegmentsRequestBody struct {
    ContactID string `json:"ContactId"`
    InstanceID string `json:"InstanceId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

type ListRealtimeContactAnalysisSegmentsRequest struct {
    QueryParams ListRealtimeContactAnalysisSegmentsQueryParams 
    Headers ListRealtimeContactAnalysisSegmentsHeaders 
    Request ListRealtimeContactAnalysisSegmentsRequestBody `request:"mediaType=application/json"`
    
}

type ListRealtimeContactAnalysisSegmentsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    ListRealtimeContactAnalysisSegmentsResponse *shared.ListRealtimeContactAnalysisSegmentsResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

