package operations

import (
"openapi/pkg/models/shared")

type ContentSubmissionsGetContentSubmissionPathParams struct {
    ContentSubmissionID int32 `pathParam:"style=simple,explode=false,name=contentSubmissionID"`
    
}

type ContentSubmissionsGetContentSubmissionQueryParams struct {
    IncludeAttributes *string `queryParam:"style=form,explode=true,name=includeAttributes"`
    
}

type ContentSubmissionsGetContentSubmissionRequest struct {
    PathParams ContentSubmissionsGetContentSubmissionPathParams 
    QueryParams ContentSubmissionsGetContentSubmissionQueryParams 
    
}

type ContentSubmissionsGetContentSubmissionResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentSubmissionSharedBusinessEntitiesContentSubmission *shared.ContentSubmissionSharedBusinessEntitiesContentSubmission 
    ContentType string 
    StatusCode int64 
    
}

