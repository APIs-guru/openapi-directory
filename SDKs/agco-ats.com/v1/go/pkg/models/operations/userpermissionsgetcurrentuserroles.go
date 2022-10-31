package operations

import (
"openapi/pkg/models/shared")

type UserPermissionsGetCurrentUserRolesQueryParams struct {
    Role *string `queryParam:"style=form,explode=true,name=Role"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type UserPermissionsGetCurrentUserRolesRequest struct {
    QueryParams UserPermissionsGetCurrentUserRolesQueryParams 
    
}

type UserPermissionsGetCurrentUserRolesResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseAPIModelsRole *shared.APIPagedResponseAPIModelsRole 
    ContentType string 
    StatusCode int64 
    
}

