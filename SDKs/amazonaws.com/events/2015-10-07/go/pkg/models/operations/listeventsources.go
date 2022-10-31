package operations

import (
"openapi/pkg/models/shared")


type ListEventSourcesXAmzTargetEnum string

const (
    ListEventSourcesXAmzTargetEnumAwsEventsListEventSources ListEventSourcesXAmzTargetEnum = "AWSEvents.ListEventSources"
)


type ListEventSourcesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListEventSourcesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListEventSourcesRequest struct {
    Headers ListEventSourcesHeaders 
    Request shared.ListEventSourcesRequest `request:"mediaType=application/json"`
    
}

type ListEventSourcesResponse struct {
    ContentType string 
    InternalException *interface{} 
    ListEventSourcesResponse *shared.ListEventSourcesResponse 
    OperationDisabledException *interface{} 
    StatusCode int64 
    
}

