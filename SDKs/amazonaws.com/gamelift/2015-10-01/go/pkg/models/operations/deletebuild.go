package operations

import (
"openapi/pkg/models/shared")


type DeleteBuildXAmzTargetEnum string

const (
    DeleteBuildXAmzTargetEnumGameLiftDeleteBuild DeleteBuildXAmzTargetEnum = "GameLift.DeleteBuild"
)


type DeleteBuildHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteBuildXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteBuildRequest struct {
    Headers DeleteBuildHeaders 
    Request shared.DeleteBuildInput `request:"mediaType=application/json"`
    
}

type DeleteBuildResponse struct {
    ContentType string 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TaggingFailedException *interface{} 
    UnauthorizedException *interface{} 
    
}

