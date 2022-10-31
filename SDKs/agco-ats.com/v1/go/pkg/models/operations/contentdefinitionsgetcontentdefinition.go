package operations

import (
"openapi/pkg/models/shared")

type ContentDefinitionsGetContentDefinitionPathParams struct {
    ContentDefinitionID int32 `pathParam:"style=simple,explode=false,name=contentDefinitionID"`
    
}

type ContentDefinitionsGetContentDefinitionQueryParams struct {
    IncludeAttributes *string `queryParam:"style=form,explode=true,name=includeAttributes"`
    
}

type ContentDefinitionsGetContentDefinitionRequest struct {
    PathParams ContentDefinitionsGetContentDefinitionPathParams 
    QueryParams ContentDefinitionsGetContentDefinitionQueryParams 
    
}

type ContentDefinitionsGetContentDefinitionResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentSubmissionSharedBusinessEntitiesContentDefinition *shared.ContentSubmissionSharedBusinessEntitiesContentDefinition 
    ContentType string 
    StatusCode int64 
    
}

