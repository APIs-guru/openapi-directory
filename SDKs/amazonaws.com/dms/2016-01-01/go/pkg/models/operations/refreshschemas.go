package operations

import (
"openapi/pkg/models/shared")


type RefreshSchemasXAmzTargetEnum string

const (
    RefreshSchemasXAmzTargetEnumAmazonDmSv20160101RefreshSchemas RefreshSchemasXAmzTargetEnum = "AmazonDMSv20160101.RefreshSchemas"
)


type RefreshSchemasHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RefreshSchemasXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RefreshSchemasRequest struct {
    Headers RefreshSchemasHeaders 
    Request shared.RefreshSchemasMessage `request:"mediaType=application/json"`
    
}

type RefreshSchemasResponse struct {
    ContentType string 
    InvalidResourceStateFault *interface{} 
    KmsKeyNotAccessibleFault *interface{} 
    RefreshSchemasResponse *shared.RefreshSchemasResponse 
    ResourceNotFoundFault *interface{} 
    ResourceQuotaExceededFault *interface{} 
    StatusCode int64 
    
}

