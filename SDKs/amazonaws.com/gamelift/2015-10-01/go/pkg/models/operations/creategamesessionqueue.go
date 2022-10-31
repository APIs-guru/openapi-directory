package operations

import (
"openapi/pkg/models/shared")


type CreateGameSessionQueueXAmzTargetEnum string

const (
    CreateGameSessionQueueXAmzTargetEnumGameLiftCreateGameSessionQueue CreateGameSessionQueueXAmzTargetEnum = "GameLift.CreateGameSessionQueue"
)


type CreateGameSessionQueueHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateGameSessionQueueXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateGameSessionQueueRequest struct {
    Headers CreateGameSessionQueueHeaders 
    Request shared.CreateGameSessionQueueInput `request:"mediaType=application/json"`
    
}

type CreateGameSessionQueueResponse struct {
    ContentType string 
    CreateGameSessionQueueOutput *shared.CreateGameSessionQueueOutput 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TaggingFailedException *interface{} 
    UnauthorizedException *interface{} 
    
}

