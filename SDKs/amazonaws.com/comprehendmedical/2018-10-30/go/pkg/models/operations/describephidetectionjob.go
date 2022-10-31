package operations

import (
"openapi/pkg/models/shared")


type DescribePhiDetectionJobXAmzTargetEnum string

const (
    DescribePhiDetectionJobXAmzTargetEnumComprehendMedical20181030DescribePhiDetectionJob DescribePhiDetectionJobXAmzTargetEnum = "ComprehendMedical_20181030.DescribePHIDetectionJob"
)


type DescribePhiDetectionJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribePhiDetectionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribePhiDetectionJobRequest struct {
    Headers DescribePhiDetectionJobHeaders 
    Request shared.DescribePhiDetectionJobRequest `request:"mediaType=application/json"`
    
}

type DescribePhiDetectionJobResponse struct {
    ContentType string 
    DescribePhiDetectionJobResponse *shared.DescribePhiDetectionJobResponse 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

