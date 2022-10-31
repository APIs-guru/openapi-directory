package operations

import (
"openapi/pkg/models/shared")


type QuerySchemaVersionMetadataXAmzTargetEnum string

const (
    QuerySchemaVersionMetadataXAmzTargetEnumAwsGlueQuerySchemaVersionMetadata QuerySchemaVersionMetadataXAmzTargetEnum = "AWSGlue.QuerySchemaVersionMetadata"
)


type QuerySchemaVersionMetadataHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget QuerySchemaVersionMetadataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type QuerySchemaVersionMetadataRequest struct {
    Headers QuerySchemaVersionMetadataHeaders 
    Request shared.QuerySchemaVersionMetadataInput `request:"mediaType=application/json"`
    
}

type QuerySchemaVersionMetadataResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    EntityNotFoundException *interface{} 
    InvalidInputException *interface{} 
    QuerySchemaVersionMetadataResponse *shared.QuerySchemaVersionMetadataResponse 
    StatusCode int64 
    
}

