package operations

import (
"openapi/pkg/models/shared")


type UpdateScriptXAmzTargetEnum string

const (
    UpdateScriptXAmzTargetEnumGameLiftUpdateScript UpdateScriptXAmzTargetEnum = "GameLift.UpdateScript"
)


type UpdateScriptHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateScriptXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateScriptRequest struct {
    Headers UpdateScriptHeaders 
    Request shared.UpdateScriptInput `request:"mediaType=application/json"`
    
}

type UpdateScriptResponse struct {
    ContentType string 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    UpdateScriptOutput *shared.UpdateScriptOutput 
    
}

