package operations

import (
"openapi/pkg/models/shared")


type StopKeyPhrasesDetectionJobXAmzTargetEnum string

const (
    StopKeyPhrasesDetectionJobXAmzTargetEnumComprehend20171127StopKeyPhrasesDetectionJob StopKeyPhrasesDetectionJobXAmzTargetEnum = "Comprehend_20171127.StopKeyPhrasesDetectionJob"
)


type StopKeyPhrasesDetectionJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopKeyPhrasesDetectionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopKeyPhrasesDetectionJobRequest struct {
    Headers StopKeyPhrasesDetectionJobHeaders 
    Request shared.StopKeyPhrasesDetectionJobRequest `request:"mediaType=application/json"`
    
}

type StopKeyPhrasesDetectionJobResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    JobNotFoundException *interface{} 
    StatusCode int64 
    StopKeyPhrasesDetectionJobResponse *shared.StopKeyPhrasesDetectionJobResponse 
    
}

