package operations

import (
"openapi/pkg/models/shared")

type RolesGetRolePermissionsPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type RolesGetRolePermissionsQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type RolesGetRolePermissionsRequest struct {
    PathParams RolesGetRolePermissionsPathParams 
    QueryParams RolesGetRolePermissionsQueryParams 
    
}

type RolesGetRolePermissionsResponse struct {
    APIPagedResponseAPIModelsPermission *shared.APIPagedResponseAPIModelsPermission 
    ContentType string 
    StatusCode int64 
    
}

