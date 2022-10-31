package operations

import (
"openapi/pkg/models/shared")


type DeleteEventBusXAmzTargetEnum string

const (
    DeleteEventBusXAmzTargetEnumAwsEventsDeleteEventBus DeleteEventBusXAmzTargetEnum = "AWSEvents.DeleteEventBus"
)


type DeleteEventBusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteEventBusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteEventBusRequest struct {
    Headers DeleteEventBusHeaders 
    Request shared.DeleteEventBusRequest `request:"mediaType=application/json"`
    
}

type DeleteEventBusResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    InternalException *interface{} 
    StatusCode int64 
    
}

