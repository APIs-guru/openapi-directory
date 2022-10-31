package operations

import (
"openapi/pkg/models/shared")


type ListPiiEntitiesDetectionJobsXAmzTargetEnum string

const (
    ListPiiEntitiesDetectionJobsXAmzTargetEnumComprehend20171127ListPiiEntitiesDetectionJobs ListPiiEntitiesDetectionJobsXAmzTargetEnum = "Comprehend_20171127.ListPiiEntitiesDetectionJobs"
)


type ListPiiEntitiesDetectionJobsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListPiiEntitiesDetectionJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListPiiEntitiesDetectionJobsRequest struct {
    Headers ListPiiEntitiesDetectionJobsHeaders 
    Request shared.ListPiiEntitiesDetectionJobsRequest `request:"mediaType=application/json"`
    
}

type ListPiiEntitiesDetectionJobsResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidFilterException *interface{} 
    InvalidRequestException *interface{} 
    ListPiiEntitiesDetectionJobsResponse *shared.ListPiiEntitiesDetectionJobsResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

