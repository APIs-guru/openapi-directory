package operations

import (
"openapi/pkg/models/shared")


type PutSchemaVersionMetadataXAmzTargetEnum string

const (
    PutSchemaVersionMetadataXAmzTargetEnumAwsGluePutSchemaVersionMetadata PutSchemaVersionMetadataXAmzTargetEnum = "AWSGlue.PutSchemaVersionMetadata"
)


type PutSchemaVersionMetadataHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutSchemaVersionMetadataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutSchemaVersionMetadataRequest struct {
    Headers PutSchemaVersionMetadataHeaders 
    Request shared.PutSchemaVersionMetadataInput `request:"mediaType=application/json"`
    
}

type PutSchemaVersionMetadataResponse struct {
    AccessDeniedException *interface{} 
    AlreadyExistsException *interface{} 
    ContentType string 
    EntityNotFoundException *interface{} 
    InvalidInputException *interface{} 
    PutSchemaVersionMetadataResponse *shared.PutSchemaVersionMetadataResponse 
    ResourceNumberLimitExceededException *interface{} 
    StatusCode int64 
    
}

