package operations

import (
"openapi/pkg/models/shared")


type ActivateEventSourceXAmzTargetEnum string

const (
    ActivateEventSourceXAmzTargetEnumAwsEventsActivateEventSource ActivateEventSourceXAmzTargetEnum = "AWSEvents.ActivateEventSource"
)


type ActivateEventSourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ActivateEventSourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ActivateEventSourceRequest struct {
    Headers ActivateEventSourceHeaders 
    Request shared.ActivateEventSourceRequest `request:"mediaType=application/json"`
    
}

type ActivateEventSourceResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    InternalException *interface{} 
    InvalidStateException *interface{} 
    OperationDisabledException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

