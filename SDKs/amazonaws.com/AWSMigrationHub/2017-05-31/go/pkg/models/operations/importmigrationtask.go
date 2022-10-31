package operations

import (
"openapi/pkg/models/shared")


type ImportMigrationTaskXAmzTargetEnum string

const (
    ImportMigrationTaskXAmzTargetEnumAwsMigrationHubImportMigrationTask ImportMigrationTaskXAmzTargetEnum = "AWSMigrationHub.ImportMigrationTask"
)


type ImportMigrationTaskHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ImportMigrationTaskXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ImportMigrationTaskRequest struct {
    Headers ImportMigrationTaskHeaders 
    Request shared.ImportMigrationTaskRequest `request:"mediaType=application/json"`
    
}

type ImportMigrationTaskResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DryRunOperation *interface{} 
    HomeRegionNotSetException *interface{} 
    ImportMigrationTaskResult map[string]interface{} 
    InternalServerError *interface{} 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedOperation *interface{} 
    
}

