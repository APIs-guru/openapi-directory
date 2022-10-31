package operations

import (
"openapi/pkg/models/shared")

type LanguagesGetLanguagePathParams struct {
    LocaleID int32 `pathParam:"style=simple,explode=false,name=LocaleID"`
    
}

type LanguagesGetLanguageRequest struct {
    PathParams LanguagesGetLanguagePathParams 
    
}

type LanguagesGetLanguageResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    GlobalResourcesSharedModelsLanguage *shared.GlobalResourcesSharedModelsLanguage 
    StatusCode int64 
    
}

