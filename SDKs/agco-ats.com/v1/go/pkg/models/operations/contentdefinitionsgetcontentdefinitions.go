package operations

import (
"openapi/pkg/models/shared")

type ContentDefinitionsGetContentDefinitionsQueryParams struct {
    IncludeAttributes *string `queryParam:"style=form,explode=true,name=includeAttributes"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    UserID *int32 `queryParam:"style=form,explode=true,name=userID"`
    
}

type ContentDefinitionsGetContentDefinitionsRequest struct {
    QueryParams ContentDefinitionsGetContentDefinitionsQueryParams 
    
}

type ContentDefinitionsGetContentDefinitionsResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition *shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition 
    ContentType string 
    StatusCode int64 
    
}

