package operations

import (
"openapi/pkg/models/shared")

type GetAPIV2PackageTypesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type GetAPIV2PackageTypesIDRequest struct {
    PathParams GetAPIV2PackageTypesIDPathParams 
    
}

type GetAPIV2PackageTypesIDResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    UpdateSystemModelsPackageType *shared.UpdateSystemModelsPackageType 
    
}

