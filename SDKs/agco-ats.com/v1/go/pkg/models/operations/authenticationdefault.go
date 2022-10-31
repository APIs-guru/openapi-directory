package operations

import (
"openapi/pkg/models/shared")

type AuthenticationDefaultRequests struct {
    APIModelsCredentials *shared.APIModelsCredentials `request:"mediaType=application/json"`
    APIModelsCredentials1 *shared.APIModelsCredentials `request:"mediaType=application/x-www-form-urlencoded"`
    APIModelsCredentials2 *shared.APIModelsCredentials `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type AuthenticationDefaultRequest struct {
    Request AuthenticationDefaultRequests 
    
}

type AuthenticationDefaultResponse struct {
    APIModelsAuthenticatedUser *shared.APIModelsAuthenticatedUser 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

