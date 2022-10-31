package operations

import (
"openapi/pkg/models/shared")


type SubscribeToEventXAmzTargetEnum string

const (
    SubscribeToEventXAmzTargetEnumInspectorServiceSubscribeToEvent SubscribeToEventXAmzTargetEnum = "InspectorService.SubscribeToEvent"
)


type SubscribeToEventHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SubscribeToEventXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SubscribeToEventRequest struct {
    Headers SubscribeToEventHeaders 
    Request shared.SubscribeToEventRequest `request:"mediaType=application/json"`
    
}

type SubscribeToEventResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalException *interface{} 
    InvalidInputException *interface{} 
    LimitExceededException *interface{} 
    NoSuchEntityException *interface{} 
    ServiceTemporarilyUnavailableException *interface{} 
    StatusCode int64 
    
}

