package operations

import (
"openapi/pkg/models/shared")


type DeleteSchemaXAmzTargetEnum string

const (
    DeleteSchemaXAmzTargetEnumAwsGlueDeleteSchema DeleteSchemaXAmzTargetEnum = "AWSGlue.DeleteSchema"
)


type DeleteSchemaHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteSchemaXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteSchemaRequest struct {
    Headers DeleteSchemaHeaders 
    Request shared.DeleteSchemaInput `request:"mediaType=application/json"`
    
}

type DeleteSchemaResponse struct {
    AccessDeniedException *interface{} 
    ConcurrentModificationException *interface{} 
    ContentType string 
    DeleteSchemaResponse *shared.DeleteSchemaResponse 
    EntityNotFoundException *interface{} 
    InvalidInputException *interface{} 
    StatusCode int64 
    
}

