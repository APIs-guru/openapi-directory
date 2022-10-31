package operations

import (
"openapi/pkg/models/shared")


type StopMatchmakingXAmzTargetEnum string

const (
    StopMatchmakingXAmzTargetEnumGameLiftStopMatchmaking StopMatchmakingXAmzTargetEnum = "GameLift.StopMatchmaking"
)


type StopMatchmakingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopMatchmakingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopMatchmakingRequest struct {
    Headers StopMatchmakingHeaders 
    Request shared.StopMatchmakingInput `request:"mediaType=application/json"`
    
}

type StopMatchmakingResponse struct {
    ContentType string 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    StopMatchmakingOutput map[string]interface{} 
    UnsupportedRegionException *interface{} 
    
}

