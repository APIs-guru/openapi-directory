package operations

import (
"openapi/pkg/models/shared")

type GlobalImageCategoriesGetFilesQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type GlobalImageCategoriesGetFilesRequest struct {
    QueryParams GlobalImageCategoriesGetFilesQueryParams 
    
}

type GlobalImageCategoriesGetFilesResponse struct {
    APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory *shared.APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory 
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

