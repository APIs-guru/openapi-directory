package operations

import (
"openapi/pkg/models/shared")

type PostSuspendAccountHolderSecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostSuspendAccountHolderSecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostSuspendAccountHolderSecurity struct {
    Option1 *PostSuspendAccountHolderSecurityOption1 `security:"option"`
    Option2 *PostSuspendAccountHolderSecurityOption2 `security:"option"`
    
}

type PostSuspendAccountHolderRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostSuspendAccountHolderSecurity 
    
}

type PostSuspendAccountHolderResponse struct {
    ContentType string 
    ServiceError *interface{} 
    StatusCode int64 
    SuspendAccountHolderResponse *interface{} 
    
}

