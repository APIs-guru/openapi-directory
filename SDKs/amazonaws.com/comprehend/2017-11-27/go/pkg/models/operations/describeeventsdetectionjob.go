package operations

import (
"openapi/pkg/models/shared")


type DescribeEventsDetectionJobXAmzTargetEnum string

const (
    DescribeEventsDetectionJobXAmzTargetEnumComprehend20171127DescribeEventsDetectionJob DescribeEventsDetectionJobXAmzTargetEnum = "Comprehend_20171127.DescribeEventsDetectionJob"
)


type DescribeEventsDetectionJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeEventsDetectionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeEventsDetectionJobRequest struct {
    Headers DescribeEventsDetectionJobHeaders 
    Request shared.DescribeEventsDetectionJobRequest `request:"mediaType=application/json"`
    
}

type DescribeEventsDetectionJobResponse struct {
    ContentType string 
    DescribeEventsDetectionJobResponse *shared.DescribeEventsDetectionJobResponse 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    JobNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

