package operations

import (
"openapi/pkg/models/shared")

type TranslationSetsUpdateTranslationSetAttributePathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=ID"`
    
}

type TranslationSetsUpdateTranslationSetAttributeRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    GlobalResourcesSharedModelsTranslationSetAttribute *shared.GlobalResourcesSharedModelsTranslationSetAttribute `request:"mediaType=application/json"`
    GlobalResourcesSharedModelsTranslationSetAttribute1 *shared.GlobalResourcesSharedModelsTranslationSetAttribute `request:"mediaType=application/x-www-form-urlencoded"`
    GlobalResourcesSharedModelsTranslationSetAttribute2 *shared.GlobalResourcesSharedModelsTranslationSetAttribute `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type TranslationSetsUpdateTranslationSetAttributeRequest struct {
    PathParams TranslationSetsUpdateTranslationSetAttributePathParams 
    Request TranslationSetsUpdateTranslationSetAttributeRequests 
    
}

type TranslationSetsUpdateTranslationSetAttributeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

