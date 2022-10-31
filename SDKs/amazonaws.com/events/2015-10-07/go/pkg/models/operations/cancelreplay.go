package operations

import (
"openapi/pkg/models/shared")


type CancelReplayXAmzTargetEnum string

const (
    CancelReplayXAmzTargetEnumAwsEventsCancelReplay CancelReplayXAmzTargetEnum = "AWSEvents.CancelReplay"
)


type CancelReplayHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CancelReplayXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CancelReplayRequest struct {
    Headers CancelReplayHeaders 
    Request shared.CancelReplayRequest `request:"mediaType=application/json"`
    
}

type CancelReplayResponse struct {
    CancelReplayResponse *shared.CancelReplayResponse 
    ConcurrentModificationException *interface{} 
    ContentType string 
    IllegalStatusException *interface{} 
    InternalException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

