package operations

import (
"openapi/pkg/models/shared")

type GlobalImagesGetGlobalImageContentsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type GlobalImagesGetGlobalImageContentsQueryParams struct {
    IsFullImage *bool `queryParam:"style=form,explode=true,name=isFullImage"`
    
}

type GlobalImagesGetGlobalImageContentsRequest struct {
    PathParams GlobalImagesGetGlobalImageContentsPathParams 
    QueryParams GlobalImagesGetGlobalImageContentsQueryParams 
    
}

type GlobalImagesGetGlobalImageContentsResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    SystemObject map[string]interface{} 
    
}

