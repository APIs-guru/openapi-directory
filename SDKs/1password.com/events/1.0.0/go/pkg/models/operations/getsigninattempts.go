package operations

import (
"openapi/pkg/models/shared")

type GetSignInAttemptsSecurity struct {
    Jwtsa shared.SchemeJwtsa `security:"scheme,type=http,subtype=bearer"`
    
}

type GetSignInAttemptsRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security GetSignInAttemptsSecurity 
    
}

type GetSignInAttemptsResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    GetSignInAttempts200ApplicationJSONAny *interface{} 
    
}

