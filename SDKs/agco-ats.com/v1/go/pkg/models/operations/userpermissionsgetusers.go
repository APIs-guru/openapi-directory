package operations

import (
"openapi/pkg/models/shared")

type UserPermissionsGetUsersPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type UserPermissionsGetUsersQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type UserPermissionsGetUsersRequest struct {
    PathParams UserPermissionsGetUsersPathParams 
    QueryParams UserPermissionsGetUsersQueryParams 
    
}

type UserPermissionsGetUsersResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseAPIModelsUser *shared.APIPagedResponseAPIModelsUser 
    ContentType string 
    StatusCode int64 
    
}

