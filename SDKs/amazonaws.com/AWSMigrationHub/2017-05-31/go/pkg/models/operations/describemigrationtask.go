package operations

import (
"openapi/pkg/models/shared")


type DescribeMigrationTaskXAmzTargetEnum string

const (
    DescribeMigrationTaskXAmzTargetEnumAwsMigrationHubDescribeMigrationTask DescribeMigrationTaskXAmzTargetEnum = "AWSMigrationHub.DescribeMigrationTask"
)


type DescribeMigrationTaskHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeMigrationTaskXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeMigrationTaskRequest struct {
    Headers DescribeMigrationTaskHeaders 
    Request shared.DescribeMigrationTaskRequest `request:"mediaType=application/json"`
    
}

type DescribeMigrationTaskResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeMigrationTaskResult *shared.DescribeMigrationTaskResult 
    HomeRegionNotSetException *interface{} 
    InternalServerError *interface{} 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

