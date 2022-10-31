package operations

import (
"openapi/pkg/models/shared")

type ListJobsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListJobsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type ListJobsRequestBodyJobStatusEnum string

const (
    ListJobsRequestBodyJobStatusEnumSubmitted ListJobsRequestBodyJobStatusEnum = "SUBMITTED"
ListJobsRequestBodyJobStatusEnumPending ListJobsRequestBodyJobStatusEnum = "PENDING"
ListJobsRequestBodyJobStatusEnumRunnable ListJobsRequestBodyJobStatusEnum = "RUNNABLE"
ListJobsRequestBodyJobStatusEnumStarting ListJobsRequestBodyJobStatusEnum = "STARTING"
ListJobsRequestBodyJobStatusEnumRunning ListJobsRequestBodyJobStatusEnum = "RUNNING"
ListJobsRequestBodyJobStatusEnumSucceeded ListJobsRequestBodyJobStatusEnum = "SUCCEEDED"
ListJobsRequestBodyJobStatusEnumFailed ListJobsRequestBodyJobStatusEnum = "FAILED"
)


type ListJobsRequestBody struct {
    ArrayJobID *string `json:"arrayJobId,omitempty"`
    Filters []shared.KeyValuesPair `json:"filters,omitempty"`
    JobQueue *string `json:"jobQueue,omitempty"`
    JobStatus *ListJobsRequestBodyJobStatusEnum `json:"jobStatus,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    MultiNodeJobID *string `json:"multiNodeJobId,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

type ListJobsRequest struct {
    QueryParams ListJobsQueryParams 
    Headers ListJobsHeaders 
    Request ListJobsRequestBody `request:"mediaType=application/json"`
    
}

type ListJobsResponse struct {
    ClientException *interface{} 
    ContentType string 
    ListJobsResponse *shared.ListJobsResponse 
    ServerException *interface{} 
    StatusCode int64 
    
}

