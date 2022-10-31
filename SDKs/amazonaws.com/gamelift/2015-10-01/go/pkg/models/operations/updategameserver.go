package operations

import (
"openapi/pkg/models/shared")


type UpdateGameServerXAmzTargetEnum string

const (
    UpdateGameServerXAmzTargetEnumGameLiftUpdateGameServer UpdateGameServerXAmzTargetEnum = "GameLift.UpdateGameServer"
)


type UpdateGameServerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateGameServerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateGameServerRequest struct {
    Headers UpdateGameServerHeaders 
    Request shared.UpdateGameServerInput `request:"mediaType=application/json"`
    
}

type UpdateGameServerResponse struct {
    ContentType string 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    UpdateGameServerOutput *shared.UpdateGameServerOutput 
    
}

