package operations

import (
"openapi/pkg/models/shared")


type DeleteProgressUpdateStreamXAmzTargetEnum string

const (
    DeleteProgressUpdateStreamXAmzTargetEnumAwsMigrationHubDeleteProgressUpdateStream DeleteProgressUpdateStreamXAmzTargetEnum = "AWSMigrationHub.DeleteProgressUpdateStream"
)


type DeleteProgressUpdateStreamHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteProgressUpdateStreamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteProgressUpdateStreamRequest struct {
    Headers DeleteProgressUpdateStreamHeaders 
    Request shared.DeleteProgressUpdateStreamRequest `request:"mediaType=application/json"`
    
}

type DeleteProgressUpdateStreamResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DeleteProgressUpdateStreamResult map[string]interface{} 
    DryRunOperation *interface{} 
    HomeRegionNotSetException *interface{} 
    InternalServerError *interface{} 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedOperation *interface{} 
    
}

