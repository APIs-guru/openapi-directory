package operations

import (
"openapi/pkg/models/shared")

type PackagesGetPackagePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type PackagesGetPackageRequest struct {
    PathParams PackagesGetPackagePathParams 
    
}

type PackagesGetPackageResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    UpdateSystemModelsPackage *shared.UpdateSystemModelsPackage 
    
}

