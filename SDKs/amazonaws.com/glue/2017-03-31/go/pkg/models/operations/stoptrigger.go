package operations

import (
"openapi/pkg/models/shared")


type StopTriggerXAmzTargetEnum string

const (
    StopTriggerXAmzTargetEnumAwsGlueStopTrigger StopTriggerXAmzTargetEnum = "AWSGlue.StopTrigger"
)


type StopTriggerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopTriggerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopTriggerRequest struct {
    Headers StopTriggerHeaders 
    Request shared.StopTriggerRequest `request:"mediaType=application/json"`
    
}

type StopTriggerResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    EntityNotFoundException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    StopTriggerResponse *shared.StopTriggerResponse 
    
}

