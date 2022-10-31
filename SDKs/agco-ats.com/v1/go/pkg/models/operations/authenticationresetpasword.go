package operations

import (
"openapi/pkg/models/shared")

type AuthenticationResetPaswordRequests struct {
    APIModelsPasswordReset *shared.APIModelsPasswordReset `request:"mediaType=application/json"`
    APIModelsPasswordReset1 *shared.APIModelsPasswordReset `request:"mediaType=application/x-www-form-urlencoded"`
    APIModelsPasswordReset2 *shared.APIModelsPasswordReset `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type AuthenticationResetPaswordRequest struct {
    Request AuthenticationResetPaswordRequests 
    
}

type AuthenticationResetPaswordResponse struct {
    ContentType string 
    StatusCode int64 
    
}

