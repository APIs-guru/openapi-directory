package operations

import (
"openapi/pkg/models/shared")


type ListPhiDetectionJobsXAmzTargetEnum string

const (
    ListPhiDetectionJobsXAmzTargetEnumComprehendMedical20181030ListPhiDetectionJobs ListPhiDetectionJobsXAmzTargetEnum = "ComprehendMedical_20181030.ListPHIDetectionJobs"
)


type ListPhiDetectionJobsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListPhiDetectionJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListPhiDetectionJobsRequest struct {
    Headers ListPhiDetectionJobsHeaders 
    Request shared.ListPhiDetectionJobsRequest `request:"mediaType=application/json"`
    
}

type ListPhiDetectionJobsResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ListPhiDetectionJobsResponse *shared.ListPhiDetectionJobsResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    ValidationException *interface{} 
    
}

