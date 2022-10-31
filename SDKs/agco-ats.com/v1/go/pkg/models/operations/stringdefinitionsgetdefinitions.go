package operations

import (
"openapi/pkg/models/shared")

type StringDefinitionsGetDefinitionsQueryParams struct {
    DescriptionText *string `queryParam:"style=form,explode=true,name=descriptionText"`
    IncludeDeletedLanguages *bool `queryParam:"style=form,explode=true,name=includeDeletedLanguages"`
    IncludeTranslations *bool `queryParam:"style=form,explode=true,name=includeTranslations"`
    LanguageIds *string `queryParam:"style=form,explode=true,name=languageIds"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    MatchingTranslationsOnly *bool `queryParam:"style=form,explode=true,name=matchingTranslationsOnly"`
    ModifiedAfterTimestamp *string `queryParam:"style=form,explode=true,name=modifiedAfterTimestamp"`
    StringIds *string `queryParam:"style=form,explode=true,name=stringIds"`
    StringText *string `queryParam:"style=form,explode=true,name=stringText"`
    UseFullText *bool `queryParam:"style=form,explode=true,name=useFullText"`
    
}

type StringDefinitionsGetDefinitionsRequest struct {
    QueryParams StringDefinitionsGetDefinitionsQueryParams 
    
}

type StringDefinitionsGetDefinitionsResponse struct {
    APIIPagedResponseGlobalResourcesSharedModelsStringDefinition *shared.APIIPagedResponseGlobalResourcesSharedModelsStringDefinition 
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

