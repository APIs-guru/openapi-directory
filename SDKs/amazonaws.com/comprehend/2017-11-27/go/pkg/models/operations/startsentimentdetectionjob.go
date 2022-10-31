package operations

import (
"openapi/pkg/models/shared")


type StartSentimentDetectionJobXAmzTargetEnum string

const (
    StartSentimentDetectionJobXAmzTargetEnumComprehend20171127StartSentimentDetectionJob StartSentimentDetectionJobXAmzTargetEnum = "Comprehend_20171127.StartSentimentDetectionJob"
)


type StartSentimentDetectionJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartSentimentDetectionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartSentimentDetectionJobRequest struct {
    Headers StartSentimentDetectionJobHeaders 
    Request shared.StartSentimentDetectionJobRequest `request:"mediaType=application/json"`
    
}

type StartSentimentDetectionJobResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    KmsKeyValidationException *interface{} 
    StartSentimentDetectionJobResponse *shared.StartSentimentDetectionJobResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    TooManyTagsException *interface{} 
    
}

