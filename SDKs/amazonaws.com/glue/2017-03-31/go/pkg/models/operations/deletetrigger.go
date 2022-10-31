package operations

import (
"openapi/pkg/models/shared")


type DeleteTriggerXAmzTargetEnum string

const (
    DeleteTriggerXAmzTargetEnumAwsGlueDeleteTrigger DeleteTriggerXAmzTargetEnum = "AWSGlue.DeleteTrigger"
)


type DeleteTriggerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteTriggerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteTriggerRequest struct {
    Headers DeleteTriggerHeaders 
    Request shared.DeleteTriggerRequest `request:"mediaType=application/json"`
    
}

type DeleteTriggerResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    DeleteTriggerResponse *shared.DeleteTriggerResponse 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

