package operations

import (
"openapi/pkg/models/shared")

type ContentSubmissionTypesGetContentSubmissionTypePathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ContentSubmissionTypesGetContentSubmissionTypeRequest struct {
    PathParams ContentSubmissionTypesGetContentSubmissionTypePathParams 
    
}

type ContentSubmissionTypesGetContentSubmissionTypeResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentSubmissionSharedBusinessEntitiesContentSubmissionType *shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType 
    ContentType string 
    StatusCode int64 
    
}

