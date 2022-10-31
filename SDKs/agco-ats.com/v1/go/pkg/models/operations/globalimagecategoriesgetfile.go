package operations

import (
"openapi/pkg/models/shared")

type GlobalImageCategoriesGetFilePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type GlobalImageCategoriesGetFileRequest struct {
    PathParams GlobalImageCategoriesGetFilePathParams 
    
}

type GlobalImageCategoriesGetFileResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    GlobalResourcesSharedModelsGlobalImageCategory *shared.GlobalResourcesSharedModelsGlobalImageCategory 
    StatusCode int64 
    
}

