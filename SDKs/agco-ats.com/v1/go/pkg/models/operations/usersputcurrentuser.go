package operations

import (
"openapi/pkg/models/shared")

type UsersPutCurrentUserRequests struct {
    APIModelsUser *shared.APIModelsUser `request:"mediaType=application/json"`
    APIModelsUser1 *shared.APIModelsUser `request:"mediaType=application/x-www-form-urlencoded"`
    APIModelsUser2 *shared.APIModelsUser `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type UsersPutCurrentUserRequest struct {
    Request UsersPutCurrentUserRequests 
    
}

type UsersPutCurrentUserResponse struct {
    ContentType string 
    StatusCode int64 
    
}

