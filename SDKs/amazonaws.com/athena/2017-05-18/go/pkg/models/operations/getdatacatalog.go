package operations

import (
"openapi/pkg/models/shared")


type GetDataCatalogXAmzTargetEnum string

const (
    GetDataCatalogXAmzTargetEnumAmazonAthenaGetDataCatalog GetDataCatalogXAmzTargetEnum = "AmazonAthena.GetDataCatalog"
)


type GetDataCatalogHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetDataCatalogXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetDataCatalogRequest struct {
    Headers GetDataCatalogHeaders 
    Request shared.GetDataCatalogInput `request:"mediaType=application/json"`
    
}

type GetDataCatalogResponse struct {
    ContentType string 
    GetDataCatalogOutput *shared.GetDataCatalogOutput 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

