package operations

import (
"openapi/pkg/models/shared")


type CreateAliasXAmzTargetEnum string

const (
    CreateAliasXAmzTargetEnumGameLiftCreateAlias CreateAliasXAmzTargetEnum = "GameLift.CreateAlias"
)


type CreateAliasHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateAliasXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateAliasRequest struct {
    Headers CreateAliasHeaders 
    Request shared.CreateAliasInput `request:"mediaType=application/json"`
    
}

type CreateAliasResponse struct {
    ConflictException *interface{} 
    ContentType string 
    CreateAliasOutput *shared.CreateAliasOutput 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    TaggingFailedException *interface{} 
    UnauthorizedException *interface{} 
    
}

