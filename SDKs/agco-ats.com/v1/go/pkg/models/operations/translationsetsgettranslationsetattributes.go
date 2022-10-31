package operations

import (
"openapi/pkg/models/shared")

type TranslationSetsGetTranslationSetAttributesPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=ID"`
    
}

type TranslationSetsGetTranslationSetAttributesQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type TranslationSetsGetTranslationSetAttributesRequest struct {
    PathParams TranslationSetsGetTranslationSetAttributesPathParams 
    QueryParams TranslationSetsGetTranslationSetAttributesQueryParams 
    
}

type TranslationSetsGetTranslationSetAttributesResponse struct {
    APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute *shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute 
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

