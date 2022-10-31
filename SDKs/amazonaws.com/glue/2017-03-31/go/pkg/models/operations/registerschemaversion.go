package operations

import (
"openapi/pkg/models/shared")


type RegisterSchemaVersionXAmzTargetEnum string

const (
    RegisterSchemaVersionXAmzTargetEnumAwsGlueRegisterSchemaVersion RegisterSchemaVersionXAmzTargetEnum = "AWSGlue.RegisterSchemaVersion"
)


type RegisterSchemaVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RegisterSchemaVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RegisterSchemaVersionRequest struct {
    Headers RegisterSchemaVersionHeaders 
    Request shared.RegisterSchemaVersionInput `request:"mediaType=application/json"`
    
}

type RegisterSchemaVersionResponse struct {
    AccessDeniedException *interface{} 
    ConcurrentModificationException *interface{} 
    ContentType string 
    EntityNotFoundException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    RegisterSchemaVersionResponse *shared.RegisterSchemaVersionResponse 
    ResourceNumberLimitExceededException *interface{} 
    StatusCode int64 
    
}

