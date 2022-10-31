package operations

import (
"openapi/pkg/models/shared")

type GetAPIV2UsersCurrentPermissionsQueryParams struct {
    Permission *string `queryParam:"style=form,explode=true,name=Permission"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type GetAPIV2UsersCurrentPermissionsRequest struct {
    QueryParams GetAPIV2UsersCurrentPermissionsQueryParams 
    
}

type GetAPIV2UsersCurrentPermissionsResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseAPIModelsUserEffectivePermission *shared.APIPagedResponseAPIModelsUserEffectivePermission 
    ContentType string 
    StatusCode int64 
    
}

