package operations

import (
"openapi/pkg/models/shared")

type ReleasePutContentDefinitionPathParams struct {
    ReleaseID int32 `pathParam:"style=simple,explode=false,name=releaseId"`
    
}

type ReleasePutContentDefinitionRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ContentSubmissionSharedBusinessEntitiesRelease *shared.ContentSubmissionSharedBusinessEntitiesRelease `request:"mediaType=application/json"`
    ContentSubmissionSharedBusinessEntitiesRelease1 *shared.ContentSubmissionSharedBusinessEntitiesRelease `request:"mediaType=application/x-www-form-urlencoded"`
    ContentSubmissionSharedBusinessEntitiesRelease2 *shared.ContentSubmissionSharedBusinessEntitiesRelease `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type ReleasePutContentDefinitionRequest struct {
    PathParams ReleasePutContentDefinitionPathParams 
    Request ReleasePutContentDefinitionRequests 
    
}

type ReleasePutContentDefinitionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

