package operations

import (
"openapi/pkg/models/shared")


type StartPhiDetectionJobXAmzTargetEnum string

const (
    StartPhiDetectionJobXAmzTargetEnumComprehendMedical20181030StartPhiDetectionJob StartPhiDetectionJobXAmzTargetEnum = "ComprehendMedical_20181030.StartPHIDetectionJob"
)


type StartPhiDetectionJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartPhiDetectionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartPhiDetectionJobRequest struct {
    Headers StartPhiDetectionJobHeaders 
    Request shared.StartPhiDetectionJobRequest `request:"mediaType=application/json"`
    
}

type StartPhiDetectionJobResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StartPhiDetectionJobResponse *shared.StartPhiDetectionJobResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

