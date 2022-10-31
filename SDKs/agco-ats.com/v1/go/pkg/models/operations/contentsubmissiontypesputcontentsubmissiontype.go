package operations

import (
"openapi/pkg/models/shared")

type ContentSubmissionTypesPutContentSubmissionTypePathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ContentSubmissionTypesPutContentSubmissionTypeRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ContentSubmissionSharedBusinessEntitiesContentSubmissionType *shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType `request:"mediaType=application/json"`
    ContentSubmissionSharedBusinessEntitiesContentSubmissionType1 *shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType `request:"mediaType=application/x-www-form-urlencoded"`
    ContentSubmissionSharedBusinessEntitiesContentSubmissionType2 *shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type ContentSubmissionTypesPutContentSubmissionTypeRequest struct {
    PathParams ContentSubmissionTypesPutContentSubmissionTypePathParams 
    Request ContentSubmissionTypesPutContentSubmissionTypeRequests 
    
}

type ContentSubmissionTypesPutContentSubmissionTypeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

