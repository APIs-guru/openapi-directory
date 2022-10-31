package operations

import (
"openapi/pkg/models/shared")


type GetRegistryCatalogDataXAmzTargetEnum string

const (
    GetRegistryCatalogDataXAmzTargetEnumSpencerFrontendServiceGetRegistryCatalogData GetRegistryCatalogDataXAmzTargetEnum = "SpencerFrontendService.GetRegistryCatalogData"
)


type GetRegistryCatalogDataHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetRegistryCatalogDataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetRegistryCatalogDataRequest struct {
    Headers GetRegistryCatalogDataHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type GetRegistryCatalogDataResponse struct {
    ContentType string 
    GetRegistryCatalogDataResponse *shared.GetRegistryCatalogDataResponse 
    ServerException *interface{} 
    StatusCode int64 
    UnsupportedCommandException *interface{} 
    
}

