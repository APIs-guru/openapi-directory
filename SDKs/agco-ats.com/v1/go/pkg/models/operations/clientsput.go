package operations

import (
"openapi/pkg/models/shared")

type ClientsPutPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type ClientsPutRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    UpdateSystemModelsClient *shared.UpdateSystemModelsClient `request:"mediaType=application/json"`
    UpdateSystemModelsClient1 *shared.UpdateSystemModelsClient `request:"mediaType=application/x-www-form-urlencoded"`
    UpdateSystemModelsClient2 *shared.UpdateSystemModelsClient `request:"mediaType=text/json"`
    
}

type ClientsPutRequest struct {
    PathParams ClientsPutPathParams 
    Request ClientsPutRequests 
    
}

type ClientsPutResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

