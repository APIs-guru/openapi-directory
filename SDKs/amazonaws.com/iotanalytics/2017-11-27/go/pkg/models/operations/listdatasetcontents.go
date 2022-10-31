package operations

import (
"time"
"openapi/pkg/models/shared")

type ListDatasetContentsPathParams struct {
    DatasetName string `pathParam:"style=simple,explode=false,name=datasetName"`
    
}

type ListDatasetContentsQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    ScheduledBefore *time.Time `queryParam:"style=form,explode=true,name=scheduledBefore"`
    ScheduledOnOrAfter *time.Time `queryParam:"style=form,explode=true,name=scheduledOnOrAfter"`
    
}

type ListDatasetContentsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListDatasetContentsRequest struct {
    PathParams ListDatasetContentsPathParams 
    QueryParams ListDatasetContentsQueryParams 
    Headers ListDatasetContentsHeaders 
    
}

type ListDatasetContentsResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ListDatasetContentsResponse *shared.ListDatasetContentsResponse 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

