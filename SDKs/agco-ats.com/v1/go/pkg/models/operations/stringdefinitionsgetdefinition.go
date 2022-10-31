package operations

import (
"openapi/pkg/models/shared")

type StringDefinitionsGetDefinitionPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type StringDefinitionsGetDefinitionQueryParams struct {
    IncludeDeletedLanguages *bool `queryParam:"style=form,explode=true,name=includeDeletedLanguages"`
    IncludeTranslations *bool `queryParam:"style=form,explode=true,name=includeTranslations"`
    LanguageIds *string `queryParam:"style=form,explode=true,name=languageIds"`
    
}

type StringDefinitionsGetDefinitionRequest struct {
    PathParams StringDefinitionsGetDefinitionPathParams 
    QueryParams StringDefinitionsGetDefinitionQueryParams 
    
}

type StringDefinitionsGetDefinitionResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    GlobalResourcesSharedModelsStringDefinition *shared.GlobalResourcesSharedModelsStringDefinition 
    StatusCode int64 
    
}

