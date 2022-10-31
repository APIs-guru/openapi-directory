package operations

import (
"openapi/pkg/models/shared")

type ContentDefinitionsPutContentDefinitionAttributeAsyncPathParams struct {
    ContentDefinitionAttributeID int32 `pathParam:"style=simple,explode=false,name=contentDefinitionAttributeID"`
    
}

type ContentDefinitionsPutContentDefinitionAttributeAsyncRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute *shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute `request:"mediaType=application/json"`
    ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute1 *shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute `request:"mediaType=application/x-www-form-urlencoded"`
    ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute2 *shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type ContentDefinitionsPutContentDefinitionAttributeAsyncRequest struct {
    PathParams ContentDefinitionsPutContentDefinitionAttributeAsyncPathParams 
    Request ContentDefinitionsPutContentDefinitionAttributeAsyncRequests 
    
}

type ContentDefinitionsPutContentDefinitionAttributeAsyncResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

