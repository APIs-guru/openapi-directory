package operations

import (
"openapi/pkg/models/shared")

type GlobalImagesGetGlobalImagesQueryParams struct {
    CategoryID *string `queryParam:"style=form,explode=true,name=categoryId"`
    IncludeDeleted *bool `queryParam:"style=form,explode=true,name=includeDeleted"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    Publisher *string `queryParam:"style=form,explode=true,name=publisher"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type GlobalImagesGetGlobalImagesRequest struct {
    QueryParams GlobalImagesGetGlobalImagesQueryParams 
    
}

type GlobalImagesGetGlobalImagesResponse struct {
    APIIPagedResponseGlobalResourcesSharedModelsGlobalImage *shared.APIIPagedResponseGlobalResourcesSharedModelsGlobalImage 
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

