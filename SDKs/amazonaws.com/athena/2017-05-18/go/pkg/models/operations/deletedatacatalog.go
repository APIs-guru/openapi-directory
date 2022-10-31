package operations

import (
"openapi/pkg/models/shared")


type DeleteDataCatalogXAmzTargetEnum string

const (
    DeleteDataCatalogXAmzTargetEnumAmazonAthenaDeleteDataCatalog DeleteDataCatalogXAmzTargetEnum = "AmazonAthena.DeleteDataCatalog"
)


type DeleteDataCatalogHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteDataCatalogXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteDataCatalogRequest struct {
    Headers DeleteDataCatalogHeaders 
    Request shared.DeleteDataCatalogInput `request:"mediaType=application/json"`
    
}

type DeleteDataCatalogResponse struct {
    ContentType string 
    DeleteDataCatalogOutput map[string]interface{} 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

