package operations

import (
"openapi/pkg/models/shared")

type UpdateSystemGetCachedFilesPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=ClientID"`
    
}

type UpdateSystemGetCachedFilesQueryParams struct {
    Expired bool `queryParam:"style=form,explode=true,name=Expired"`
    
}

type UpdateSystemGetCachedFilesRequest struct {
    PathParams UpdateSystemGetCachedFilesPathParams 
    QueryParams UpdateSystemGetCachedFilesQueryParams 
    
}

type UpdateSystemGetCachedFilesResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    UpdateSystemGetCachedFiles200ApplicationJSONStrings []string 
    UpdateSystemGetCachedFiles200TextJSONStrings []string 
    
}

