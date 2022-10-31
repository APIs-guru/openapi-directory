package operations

import (
"openapi/pkg/models/shared")


type CreateFleetXAmzTargetEnum string

const (
    CreateFleetXAmzTargetEnumGameLiftCreateFleet CreateFleetXAmzTargetEnum = "GameLift.CreateFleet"
)


type CreateFleetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateFleetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateFleetRequest struct {
    Headers CreateFleetHeaders 
    Request shared.CreateFleetInput `request:"mediaType=application/json"`
    
}

type CreateFleetResponse struct {
    ConflictException *interface{} 
    ContentType string 
    CreateFleetOutput *shared.CreateFleetOutput 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TaggingFailedException *interface{} 
    UnauthorizedException *interface{} 
    
}

