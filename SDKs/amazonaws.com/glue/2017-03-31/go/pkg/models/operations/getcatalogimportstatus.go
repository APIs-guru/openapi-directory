package operations

import (
"openapi/pkg/models/shared")


type GetCatalogImportStatusXAmzTargetEnum string

const (
    GetCatalogImportStatusXAmzTargetEnumAwsGlueGetCatalogImportStatus GetCatalogImportStatusXAmzTargetEnum = "AWSGlue.GetCatalogImportStatus"
)


type GetCatalogImportStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetCatalogImportStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetCatalogImportStatusRequest struct {
    Headers GetCatalogImportStatusHeaders 
    Request shared.GetCatalogImportStatusRequest `request:"mediaType=application/json"`
    
}

type GetCatalogImportStatusResponse struct {
    ContentType string 
    GetCatalogImportStatusResponse *shared.GetCatalogImportStatusResponse 
    InternalServiceException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

