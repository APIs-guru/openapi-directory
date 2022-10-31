package operations

import (
"openapi/pkg/models/shared")


type CreateScriptXAmzTargetEnum string

const (
    CreateScriptXAmzTargetEnumGameLiftCreateScript CreateScriptXAmzTargetEnum = "GameLift.CreateScript"
)


type CreateScriptHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateScriptXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateScriptRequest struct {
    Headers CreateScriptHeaders 
    Request shared.CreateScriptInput `request:"mediaType=application/json"`
    
}

type CreateScriptResponse struct {
    ConflictException *interface{} 
    ContentType string 
    CreateScriptOutput *shared.CreateScriptOutput 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    TaggingFailedException *interface{} 
    UnauthorizedException *interface{} 
    
}

