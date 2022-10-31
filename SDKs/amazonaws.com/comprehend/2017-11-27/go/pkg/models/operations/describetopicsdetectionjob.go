package operations

import (
"openapi/pkg/models/shared")


type DescribeTopicsDetectionJobXAmzTargetEnum string

const (
    DescribeTopicsDetectionJobXAmzTargetEnumComprehend20171127DescribeTopicsDetectionJob DescribeTopicsDetectionJobXAmzTargetEnum = "Comprehend_20171127.DescribeTopicsDetectionJob"
)


type DescribeTopicsDetectionJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeTopicsDetectionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeTopicsDetectionJobRequest struct {
    Headers DescribeTopicsDetectionJobHeaders 
    Request shared.DescribeTopicsDetectionJobRequest `request:"mediaType=application/json"`
    
}

type DescribeTopicsDetectionJobResponse struct {
    ContentType string 
    DescribeTopicsDetectionJobResponse *shared.DescribeTopicsDetectionJobResponse 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    JobNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

