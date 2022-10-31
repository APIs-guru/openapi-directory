package operations

import (
"time"
"openapi/pkg/models/shared")

type ListDetectMitigationActionsTasksQueryParams struct {
    EndTime time.Time `queryParam:"style=form,explode=true,name=endTime"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    StartTime time.Time `queryParam:"style=form,explode=true,name=startTime"`
    
}

type ListDetectMitigationActionsTasksHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListDetectMitigationActionsTasksRequest struct {
    QueryParams ListDetectMitigationActionsTasksQueryParams 
    Headers ListDetectMitigationActionsTasksHeaders 
    
}

type ListDetectMitigationActionsTasksResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ListDetectMitigationActionsTasksResponse *shared.ListDetectMitigationActionsTasksResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

