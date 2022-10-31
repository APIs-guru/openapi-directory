package operations

import (
"openapi/pkg/models/shared")


type DeleteGameSessionQueueXAmzTargetEnum string

const (
    DeleteGameSessionQueueXAmzTargetEnumGameLiftDeleteGameSessionQueue DeleteGameSessionQueueXAmzTargetEnum = "GameLift.DeleteGameSessionQueue"
)


type DeleteGameSessionQueueHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteGameSessionQueueXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteGameSessionQueueRequest struct {
    Headers DeleteGameSessionQueueHeaders 
    Request shared.DeleteGameSessionQueueInput `request:"mediaType=application/json"`
    
}

type DeleteGameSessionQueueResponse struct {
    ContentType string 
    DeleteGameSessionQueueOutput map[string]interface{} 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TaggingFailedException *interface{} 
    UnauthorizedException *interface{} 
    
}

