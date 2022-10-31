package operations

import (
"openapi/pkg/models/shared")


type DeleteGameServerGroupXAmzTargetEnum string

const (
    DeleteGameServerGroupXAmzTargetEnumGameLiftDeleteGameServerGroup DeleteGameServerGroupXAmzTargetEnum = "GameLift.DeleteGameServerGroup"
)


type DeleteGameServerGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteGameServerGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteGameServerGroupRequest struct {
    Headers DeleteGameServerGroupHeaders 
    Request shared.DeleteGameServerGroupInput `request:"mediaType=application/json"`
    
}

type DeleteGameServerGroupResponse struct {
    ContentType string 
    DeleteGameServerGroupOutput *shared.DeleteGameServerGroupOutput 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

