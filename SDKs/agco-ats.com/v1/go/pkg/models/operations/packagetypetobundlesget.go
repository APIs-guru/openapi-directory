package operations

import (
"openapi/pkg/models/shared")

type PackageTypetoBundlesGetQueryParams struct {
    BundleID *string `queryParam:"style=form,explode=true,name=BundleID"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type PackageTypetoBundlesGetRequest struct {
    QueryParams PackageTypetoBundlesGetQueryParams 
    
}

type PackageTypetoBundlesGetResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle *shared.APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle 
    ContentType string 
    StatusCode int64 
    
}

