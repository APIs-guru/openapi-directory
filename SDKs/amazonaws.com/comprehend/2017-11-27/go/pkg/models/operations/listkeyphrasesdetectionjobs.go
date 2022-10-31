package operations

import (
"openapi/pkg/models/shared")

type ListKeyPhrasesDetectionJobsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListKeyPhrasesDetectionJobsXAmzTargetEnum string

const (
    ListKeyPhrasesDetectionJobsXAmzTargetEnumComprehend20171127ListKeyPhrasesDetectionJobs ListKeyPhrasesDetectionJobsXAmzTargetEnum = "Comprehend_20171127.ListKeyPhrasesDetectionJobs"
)


type ListKeyPhrasesDetectionJobsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListKeyPhrasesDetectionJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListKeyPhrasesDetectionJobsRequest struct {
    QueryParams ListKeyPhrasesDetectionJobsQueryParams 
    Headers ListKeyPhrasesDetectionJobsHeaders 
    Request shared.ListKeyPhrasesDetectionJobsRequest `request:"mediaType=application/json"`
    
}

type ListKeyPhrasesDetectionJobsResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidFilterException *interface{} 
    InvalidRequestException *interface{} 
    ListKeyPhrasesDetectionJobsResponse *shared.ListKeyPhrasesDetectionJobsResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

