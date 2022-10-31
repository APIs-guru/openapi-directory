package operations

import (
"openapi/pkg/models/shared")

type BundlesGetBundlePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type BundlesGetBundleRequest struct {
    PathParams BundlesGetBundlePathParams 
    
}

type BundlesGetBundleResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    UpdateSystemModelsBundle *shared.UpdateSystemModelsBundle 
    
}

