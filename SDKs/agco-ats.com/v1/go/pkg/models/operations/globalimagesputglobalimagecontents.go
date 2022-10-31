package operations

import (
"openapi/pkg/models/shared")

type GlobalImagesPutGlobalImageContentsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type GlobalImagesPutGlobalImageContentsQueryParams struct {
    IsFullImage *bool `queryParam:"style=form,explode=true,name=isFullImage"`
    
}

type GlobalImagesPutGlobalImageContentsRequest struct {
    PathParams GlobalImagesPutGlobalImageContentsPathParams 
    QueryParams GlobalImagesPutGlobalImageContentsQueryParams 
    
}

type GlobalImagesPutGlobalImageContentsResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    SystemObject map[string]interface{} 
    
}

