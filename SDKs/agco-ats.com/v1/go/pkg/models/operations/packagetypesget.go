package operations

import (
"openapi/pkg/models/shared")

type PackageTypesGetQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    UserID *int32 `queryParam:"style=form,explode=true,name=userID"`
    
}

type PackageTypesGetRequest struct {
    QueryParams PackageTypesGetQueryParams 
    
}

type PackageTypesGetResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseUpdateSystemModelsPackageType *shared.APIPagedResponseUpdateSystemModelsPackageType 
    ContentType string 
    StatusCode int64 
    
}

