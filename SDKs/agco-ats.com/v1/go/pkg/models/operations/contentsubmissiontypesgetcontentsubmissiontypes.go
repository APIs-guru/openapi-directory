package operations

import (
"openapi/pkg/models/shared")

type ContentSubmissionTypesGetContentSubmissionTypesQueryParams struct {
    Enabled *bool `queryParam:"style=form,explode=true,name=enabled"`
    
}

type ContentSubmissionTypesGetContentSubmissionTypesRequest struct {
    QueryParams ContentSubmissionTypesGetContentSubmissionTypesQueryParams 
    
}

type ContentSubmissionTypesGetContentSubmissionTypesResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentSubmissionSharedBusinessEntitiesContentSubmissionTypes []shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType 
    ContentType string 
    StatusCode int64 
    
}

