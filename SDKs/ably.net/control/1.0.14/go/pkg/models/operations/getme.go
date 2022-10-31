package operations

import (
"openapi/pkg/models/shared")

type GetMeSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetMeRequest struct {
    Security GetMeSecurity 
    
}

type GetMeResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    Me *shared.Me 
    
}

