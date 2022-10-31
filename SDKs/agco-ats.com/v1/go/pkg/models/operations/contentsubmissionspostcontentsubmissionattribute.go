package operations

import (
"openapi/pkg/models/shared")

type ContentSubmissionsPostContentSubmissionAttributePathParams struct {
    ContentSubmissionID int32 `pathParam:"style=simple,explode=false,name=contentSubmissionID"`
    
}

type ContentSubmissionsPostContentSubmissionAttributeRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute *shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute `request:"mediaType=application/json"`
    ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute1 *shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute `request:"mediaType=application/x-www-form-urlencoded"`
    ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute2 *shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type ContentSubmissionsPostContentSubmissionAttributeRequest struct {
    PathParams ContentSubmissionsPostContentSubmissionAttributePathParams 
    Request ContentSubmissionsPostContentSubmissionAttributeRequests 
    
}

type ContentSubmissionsPostContentSubmissionAttributeResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentSubmissionsPostContentSubmissionAttribute200ApplicationJSONInt32Integer *int32 
    ContentSubmissionsPostContentSubmissionAttribute200TextJSONInt32Integer *int32 
    ContentType string 
    StatusCode int64 
    
}

