package operations

import (
"openapi/pkg/models/shared")


type DeregisterGameServerXAmzTargetEnum string

const (
    DeregisterGameServerXAmzTargetEnumGameLiftDeregisterGameServer DeregisterGameServerXAmzTargetEnum = "GameLift.DeregisterGameServer"
)


type DeregisterGameServerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeregisterGameServerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeregisterGameServerRequest struct {
    Headers DeregisterGameServerHeaders 
    Request shared.DeregisterGameServerInput `request:"mediaType=application/json"`
    
}

type DeregisterGameServerResponse struct {
    ContentType string 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

