package operations

import (
"openapi/pkg/models/shared")


type ListEventBusesXAmzTargetEnum string

const (
    ListEventBusesXAmzTargetEnumAwsEventsListEventBuses ListEventBusesXAmzTargetEnum = "AWSEvents.ListEventBuses"
)


type ListEventBusesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListEventBusesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListEventBusesRequest struct {
    Headers ListEventBusesHeaders 
    Request shared.ListEventBusesRequest `request:"mediaType=application/json"`
    
}

type ListEventBusesResponse struct {
    ContentType string 
    InternalException *interface{} 
    ListEventBusesResponse *shared.ListEventBusesResponse 
    StatusCode int64 
    
}

