package operations

import (
"openapi/pkg/models/shared")


type DeleteAliasXAmzTargetEnum string

const (
    DeleteAliasXAmzTargetEnumGameLiftDeleteAlias DeleteAliasXAmzTargetEnum = "GameLift.DeleteAlias"
)


type DeleteAliasHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteAliasXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteAliasRequest struct {
    Headers DeleteAliasHeaders 
    Request shared.DeleteAliasInput `request:"mediaType=application/json"`
    
}

type DeleteAliasResponse struct {
    ContentType string 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TaggingFailedException *interface{} 
    UnauthorizedException *interface{} 
    
}

