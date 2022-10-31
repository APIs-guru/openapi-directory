package operations

import (
"openapi/pkg/models/shared")

type ContentReleasePutContentDefinitionPathParams struct {
    ContentReleaseID int32 `pathParam:"style=simple,explode=false,name=ContentReleaseId"`
    
}

type ContentReleasePutContentDefinitionRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ContentSubmissionSharedBusinessEntitiesContentReleaseVersion *shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion `request:"mediaType=application/json"`
    ContentSubmissionSharedBusinessEntitiesContentReleaseVersion1 *shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion `request:"mediaType=application/x-www-form-urlencoded"`
    ContentSubmissionSharedBusinessEntitiesContentReleaseVersion2 *shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type ContentReleasePutContentDefinitionRequest struct {
    PathParams ContentReleasePutContentDefinitionPathParams 
    Request ContentReleasePutContentDefinitionRequests 
    
}

type ContentReleasePutContentDefinitionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

