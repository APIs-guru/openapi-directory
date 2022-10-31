package operations

import (
"openapi/pkg/models/shared")


type PutRepositoryCatalogDataXAmzTargetEnum string

const (
    PutRepositoryCatalogDataXAmzTargetEnumSpencerFrontendServicePutRepositoryCatalogData PutRepositoryCatalogDataXAmzTargetEnum = "SpencerFrontendService.PutRepositoryCatalogData"
)


type PutRepositoryCatalogDataHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutRepositoryCatalogDataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutRepositoryCatalogDataRequest struct {
    Headers PutRepositoryCatalogDataHeaders 
    Request shared.PutRepositoryCatalogDataRequest `request:"mediaType=application/json"`
    
}

type PutRepositoryCatalogDataResponse struct {
    ContentType string 
    InvalidParameterException *interface{} 
    PutRepositoryCatalogDataResponse *shared.PutRepositoryCatalogDataResponse 
    RepositoryNotFoundException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    
}

