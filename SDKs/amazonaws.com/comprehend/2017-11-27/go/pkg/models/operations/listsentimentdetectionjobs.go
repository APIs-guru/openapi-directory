package operations

import (
"openapi/pkg/models/shared")

type ListSentimentDetectionJobsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListSentimentDetectionJobsXAmzTargetEnum string

const (
    ListSentimentDetectionJobsXAmzTargetEnumComprehend20171127ListSentimentDetectionJobs ListSentimentDetectionJobsXAmzTargetEnum = "Comprehend_20171127.ListSentimentDetectionJobs"
)


type ListSentimentDetectionJobsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListSentimentDetectionJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListSentimentDetectionJobsRequest struct {
    QueryParams ListSentimentDetectionJobsQueryParams 
    Headers ListSentimentDetectionJobsHeaders 
    Request shared.ListSentimentDetectionJobsRequest `request:"mediaType=application/json"`
    
}

type ListSentimentDetectionJobsResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidFilterException *interface{} 
    InvalidRequestException *interface{} 
    ListSentimentDetectionJobsResponse *shared.ListSentimentDetectionJobsResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

