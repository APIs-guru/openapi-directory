package operations

import (
"openapi/pkg/models/shared")

type PostGetAccountHolderSecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostGetAccountHolderSecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostGetAccountHolderSecurity struct {
    Option1 *PostGetAccountHolderSecurityOption1 `security:"option"`
    Option2 *PostGetAccountHolderSecurityOption2 `security:"option"`
    
}

type PostGetAccountHolderRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostGetAccountHolderSecurity 
    
}

type PostGetAccountHolderResponse struct {
    ContentType string 
    GetAccountHolderResponse *interface{} 
    ServiceError *interface{} 
    StatusCode int64 
    
}

