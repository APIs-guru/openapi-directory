package operations

import (
"openapi/pkg/models/shared")

type ContentSubmissionTypesPostContentSubmissionTypeRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ContentSubmissionSharedBusinessEntitiesContentSubmissionType *shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType `request:"mediaType=application/json"`
    ContentSubmissionSharedBusinessEntitiesContentSubmissionType1 *shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType `request:"mediaType=application/x-www-form-urlencoded"`
    ContentSubmissionSharedBusinessEntitiesContentSubmissionType2 *shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type ContentSubmissionTypesPostContentSubmissionTypeRequest struct {
    Request ContentSubmissionTypesPostContentSubmissionTypeRequests 
    
}

type ContentSubmissionTypesPostContentSubmissionTypeResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentSubmissionTypesPostContentSubmissionType200ApplicationJSONInt32Integer *int32 
    ContentSubmissionTypesPostContentSubmissionType200TextJSONInt32Integer *int32 
    ContentType string 
    StatusCode int64 
    
}

