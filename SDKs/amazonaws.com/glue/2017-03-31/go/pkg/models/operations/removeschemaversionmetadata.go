package operations

import (
"openapi/pkg/models/shared")


type RemoveSchemaVersionMetadataXAmzTargetEnum string

const (
    RemoveSchemaVersionMetadataXAmzTargetEnumAwsGlueRemoveSchemaVersionMetadata RemoveSchemaVersionMetadataXAmzTargetEnum = "AWSGlue.RemoveSchemaVersionMetadata"
)


type RemoveSchemaVersionMetadataHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RemoveSchemaVersionMetadataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RemoveSchemaVersionMetadataRequest struct {
    Headers RemoveSchemaVersionMetadataHeaders 
    Request shared.RemoveSchemaVersionMetadataInput `request:"mediaType=application/json"`
    
}

type RemoveSchemaVersionMetadataResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    EntityNotFoundException *interface{} 
    InvalidInputException *interface{} 
    RemoveSchemaVersionMetadataResponse *shared.RemoveSchemaVersionMetadataResponse 
    StatusCode int64 
    
}

