package operations

import (
"openapi/pkg/models/shared")

type ContentReleasePostContentReleaseRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ContentSubmissionSharedBusinessEntitiesContentReleaseVersion *shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion `request:"mediaType=application/json"`
    ContentSubmissionSharedBusinessEntitiesContentReleaseVersion1 *shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion `request:"mediaType=application/x-www-form-urlencoded"`
    ContentSubmissionSharedBusinessEntitiesContentReleaseVersion2 *shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type ContentReleasePostContentReleaseRequest struct {
    Request ContentReleasePostContentReleaseRequests 
    
}

type ContentReleasePostContentReleaseResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentReleasePostContentRelease200ApplicationJSONInt32Integer *int32 
    ContentReleasePostContentRelease200TextJSONInt32Integer *int32 
    ContentType string 
    StatusCode int64 
    
}

