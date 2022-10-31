package operations

import (
"openapi/pkg/models/shared")


type TranslationSetsGetTranslationSetsStateEnum string

const (
    TranslationSetsGetTranslationSetsStateEnumOutForProcessing TranslationSetsGetTranslationSetsStateEnum = "OutForProcessing"
TranslationSetsGetTranslationSetsStateEnumProcessing TranslationSetsGetTranslationSetsStateEnum = "Processing"
TranslationSetsGetTranslationSetsStateEnumPendingApproval TranslationSetsGetTranslationSetsStateEnum = "PendingApproval"
TranslationSetsGetTranslationSetsStateEnumOutForTranslation TranslationSetsGetTranslationSetsStateEnum = "OutForTranslation"
TranslationSetsGetTranslationSetsStateEnumCancelled TranslationSetsGetTranslationSetsStateEnum = "Cancelled"
TranslationSetsGetTranslationSetsStateEnumCompleted TranslationSetsGetTranslationSetsStateEnum = "Completed"
)


type TranslationSetsGetTranslationSetsQueryParams struct {
    IncludeAttributes *string `queryParam:"style=form,explode=true,name=includeAttributes"`
    LanguageID *int32 `queryParam:"style=form,explode=true,name=languageId"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    State *TranslationSetsGetTranslationSetsStateEnum `queryParam:"style=form,explode=true,name=state"`
    StringID *string `queryParam:"style=form,explode=true,name=stringId"`
    TranslationRequestID *int32 `queryParam:"style=form,explode=true,name=translationRequestID"`
    
}

type TranslationSetsGetTranslationSetsRequest struct {
    QueryParams TranslationSetsGetTranslationSetsQueryParams 
    
}

type TranslationSetsGetTranslationSetsResponse struct {
    APIIPagedResponseGlobalResourcesSharedModelsTranslationSet *shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationSet 
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

