package operations

import (
"openapi/pkg/models/shared")

type AuthorizationCategoriesGetUsersQueryParams struct {
    CategoryIDs *string `queryParam:"style=form,explode=true,name=categoryIDs"`
    IncludeCategories *bool `queryParam:"style=form,explode=true,name=includeCategories"`
    IncludeUsers *bool `queryParam:"style=form,explode=true,name=includeUsers"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    UserIDs *string `queryParam:"style=form,explode=true,name=userIDs"`
    UserSearch *string `queryParam:"style=form,explode=true,name=userSearch"`
    
}

type AuthorizationCategoriesGetUsersRequest struct {
    QueryParams AuthorizationCategoriesGetUsersQueryParams 
    
}

type AuthorizationCategoriesGetUsersResponse struct {
    APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport *shared.APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport 
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

