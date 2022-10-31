package operations

import (
"openapi/pkg/models/shared")


type StopPhiDetectionJobXAmzTargetEnum string

const (
    StopPhiDetectionJobXAmzTargetEnumComprehendMedical20181030StopPhiDetectionJob StopPhiDetectionJobXAmzTargetEnum = "ComprehendMedical_20181030.StopPHIDetectionJob"
)


type StopPhiDetectionJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopPhiDetectionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopPhiDetectionJobRequest struct {
    Headers StopPhiDetectionJobHeaders 
    Request shared.StopPhiDetectionJobRequest `request:"mediaType=application/json"`
    
}

type StopPhiDetectionJobResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    StopPhiDetectionJobResponse *shared.StopPhiDetectionJobResponse 
    
}

