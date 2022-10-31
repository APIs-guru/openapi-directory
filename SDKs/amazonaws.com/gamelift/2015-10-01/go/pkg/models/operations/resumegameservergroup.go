package operations

import (
"openapi/pkg/models/shared")


type ResumeGameServerGroupXAmzTargetEnum string

const (
    ResumeGameServerGroupXAmzTargetEnumGameLiftResumeGameServerGroup ResumeGameServerGroupXAmzTargetEnum = "GameLift.ResumeGameServerGroup"
)


type ResumeGameServerGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ResumeGameServerGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ResumeGameServerGroupRequest struct {
    Headers ResumeGameServerGroupHeaders 
    Request shared.ResumeGameServerGroupInput `request:"mediaType=application/json"`
    
}

type ResumeGameServerGroupResponse struct {
    ContentType string 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    ResumeGameServerGroupOutput *shared.ResumeGameServerGroupOutput 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

