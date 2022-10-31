package operations

import (
"openapi/pkg/models/shared")

type AuthorizationCategoriesGetQueryParams struct {
    DefinitionID *string `queryParam:"style=form,explode=true,name=definitionID"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    UserID *int32 `queryParam:"style=form,explode=true,name=userID"`
    
}

type AuthorizationCategoriesGetRequest struct {
    QueryParams AuthorizationCategoriesGetQueryParams 
    
}

type AuthorizationCategoriesGetResponse struct {
    APIIPagedResponseAuthorizationCodesSharedModelsCategory *shared.APIIPagedResponseAuthorizationCodesSharedModelsCategory 
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

