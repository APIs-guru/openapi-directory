package operations

import (
"openapi/pkg/models/shared")

type TranslationKeysGetQueryParams struct {
    KeyNames *string `queryParam:"style=form,explode=true,name=keyNames"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type TranslationKeysGetRequest struct {
    QueryParams TranslationKeysGetQueryParams 
    
}

type TranslationKeysGetResponse struct {
    APIIPagedResponseOasSupportSharedModelsTranslationKey *shared.APIIPagedResponseOasSupportSharedModelsTranslationKey 
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

