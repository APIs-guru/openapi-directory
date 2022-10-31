package operations

import (
"openapi/pkg/models/shared")


type DeactivateEventSourceXAmzTargetEnum string

const (
    DeactivateEventSourceXAmzTargetEnumAwsEventsDeactivateEventSource DeactivateEventSourceXAmzTargetEnum = "AWSEvents.DeactivateEventSource"
)


type DeactivateEventSourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeactivateEventSourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeactivateEventSourceRequest struct {
    Headers DeactivateEventSourceHeaders 
    Request shared.DeactivateEventSourceRequest `request:"mediaType=application/json"`
    
}

type DeactivateEventSourceResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    InternalException *interface{} 
    InvalidStateException *interface{} 
    OperationDisabledException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

