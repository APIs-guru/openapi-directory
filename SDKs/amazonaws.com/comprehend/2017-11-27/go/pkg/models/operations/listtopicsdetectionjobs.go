package operations

import (
"openapi/pkg/models/shared")

type ListTopicsDetectionJobsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListTopicsDetectionJobsXAmzTargetEnum string

const (
    ListTopicsDetectionJobsXAmzTargetEnumComprehend20171127ListTopicsDetectionJobs ListTopicsDetectionJobsXAmzTargetEnum = "Comprehend_20171127.ListTopicsDetectionJobs"
)


type ListTopicsDetectionJobsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListTopicsDetectionJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListTopicsDetectionJobsRequest struct {
    QueryParams ListTopicsDetectionJobsQueryParams 
    Headers ListTopicsDetectionJobsHeaders 
    Request shared.ListTopicsDetectionJobsRequest `request:"mediaType=application/json"`
    
}

type ListTopicsDetectionJobsResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidFilterException *interface{} 
    InvalidRequestException *interface{} 
    ListTopicsDetectionJobsResponse *shared.ListTopicsDetectionJobsResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

