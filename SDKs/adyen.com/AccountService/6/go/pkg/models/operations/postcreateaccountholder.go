package operations

import (
"openapi/pkg/models/shared")

type PostCreateAccountHolderSecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostCreateAccountHolderSecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostCreateAccountHolderSecurity struct {
    Option1 *PostCreateAccountHolderSecurityOption1 `security:"option"`
    Option2 *PostCreateAccountHolderSecurityOption2 `security:"option"`
    
}

type PostCreateAccountHolderRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostCreateAccountHolderSecurity 
    
}

type PostCreateAccountHolderResponse struct {
    ContentType string 
    CreateAccountHolderResponse *interface{} 
    ServiceError *interface{} 
    StatusCode int64 
    
}

