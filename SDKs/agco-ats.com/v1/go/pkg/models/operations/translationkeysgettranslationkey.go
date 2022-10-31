package operations

import (
"openapi/pkg/models/shared")

type TranslationKeysGetTranslationKeyPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=ID"`
    
}

type TranslationKeysGetTranslationKeyRequest struct {
    PathParams TranslationKeysGetTranslationKeyPathParams 
    
}

type TranslationKeysGetTranslationKeyResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    OasSupportSharedModelsTranslationKey *shared.OasSupportSharedModelsTranslationKey 
    StatusCode int64 
    
}

