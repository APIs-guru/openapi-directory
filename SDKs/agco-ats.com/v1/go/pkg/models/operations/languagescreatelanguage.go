package operations

import (
"openapi/pkg/models/shared")

type LanguagesCreateLanguageRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    GlobalResourcesSharedModelsLanguage *shared.GlobalResourcesSharedModelsLanguage `request:"mediaType=application/json"`
    GlobalResourcesSharedModelsLanguage1 *shared.GlobalResourcesSharedModelsLanguage `request:"mediaType=application/x-www-form-urlencoded"`
    GlobalResourcesSharedModelsLanguage2 *shared.GlobalResourcesSharedModelsLanguage `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type LanguagesCreateLanguageRequest struct {
    Request LanguagesCreateLanguageRequests 
    
}

type LanguagesCreateLanguageResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    LanguagesCreateLanguage200ApplicationJSONInt32Integer *int32 
    LanguagesCreateLanguage200TextJSONInt32Integer *int32 
    StatusCode int64 
    
}

