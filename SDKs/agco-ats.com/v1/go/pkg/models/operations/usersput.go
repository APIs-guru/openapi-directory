package operations

import (
"openapi/pkg/models/shared")

type UsersPutPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type UsersPutRequests struct {
    APIModelsUser *shared.APIModelsUser `request:"mediaType=application/json"`
    APIModelsUser1 *shared.APIModelsUser `request:"mediaType=application/x-www-form-urlencoded"`
    APIModelsUser2 *shared.APIModelsUser `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type UsersPutRequest struct {
    PathParams UsersPutPathParams 
    Request UsersPutRequests 
    
}

type UsersPutResponse struct {
    ContentType string 
    StatusCode int64 
    
}

