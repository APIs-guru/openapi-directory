package operations

import (
"openapi/pkg/models/shared")


type StartMatchmakingXAmzTargetEnum string

const (
    StartMatchmakingXAmzTargetEnumGameLiftStartMatchmaking StartMatchmakingXAmzTargetEnum = "GameLift.StartMatchmaking"
)


type StartMatchmakingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartMatchmakingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartMatchmakingRequest struct {
    Headers StartMatchmakingHeaders 
    Request shared.StartMatchmakingInput `request:"mediaType=application/json"`
    
}

type StartMatchmakingResponse struct {
    ContentType string 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StartMatchmakingOutput *shared.StartMatchmakingOutput 
    StatusCode int64 
    UnsupportedRegionException *interface{} 
    
}

