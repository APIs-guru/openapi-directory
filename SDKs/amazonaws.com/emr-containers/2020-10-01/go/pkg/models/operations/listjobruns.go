package operations

import (
"time"
"openapi/pkg/models/shared")

type ListJobRunsPathParams struct {
    VirtualClusterID string `pathParam:"style=simple,explode=false,name=virtualClusterId"`
    
}

type ListJobRunsQueryParams struct {
    CreatedAfter *time.Time `queryParam:"style=form,explode=true,name=createdAfter"`
    CreatedBefore *time.Time `queryParam:"style=form,explode=true,name=createdBefore"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    States []shared.JobRunStateEnum `queryParam:"style=form,explode=true,name=states"`
    
}

type ListJobRunsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListJobRunsRequest struct {
    PathParams ListJobRunsPathParams 
    QueryParams ListJobRunsQueryParams 
    Headers ListJobRunsHeaders 
    
}

type ListJobRunsResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    ListJobRunsResponse *shared.ListJobRunsResponse 
    StatusCode int64 
    ValidationException *interface{} 
    
}

