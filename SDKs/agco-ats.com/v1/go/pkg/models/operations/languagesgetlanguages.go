package operations

import (
"openapi/pkg/models/shared")

type LanguagesGetLanguagesQueryParams struct {
    IncludeDeleted *bool `queryParam:"style=form,explode=true,name=includeDeleted"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type LanguagesGetLanguagesRequest struct {
    QueryParams LanguagesGetLanguagesQueryParams 
    
}

type LanguagesGetLanguagesResponse struct {
    APIIPagedResponseGlobalResourcesSharedModelsLanguage *shared.APIIPagedResponseGlobalResourcesSharedModelsLanguage 
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

