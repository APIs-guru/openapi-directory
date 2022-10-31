package operations

import (
"openapi/pkg/models/shared")

type TranslationRequestsGetTranslationRequestPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=Id"`
    
}

type TranslationRequestsGetTranslationRequestRequest struct {
    PathParams TranslationRequestsGetTranslationRequestPathParams 
    
}

type TranslationRequestsGetTranslationRequestResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    GlobalResourcesSharedModelsTranslationRequest *shared.GlobalResourcesSharedModelsTranslationRequest 
    StatusCode int64 
    
}

