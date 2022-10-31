package operations

import (
"openapi/pkg/models/shared")

type PackagesGetPackagesQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type PackagesGetPackagesRequest struct {
    QueryParams PackagesGetPackagesQueryParams 
    
}

type PackagesGetPackagesResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseUpdateSystemModelsPackage *shared.APIPagedResponseUpdateSystemModelsPackage 
    ContentType string 
    StatusCode int64 
    
}

