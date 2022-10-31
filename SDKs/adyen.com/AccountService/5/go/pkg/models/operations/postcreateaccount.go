package operations

import (
"openapi/pkg/models/shared")

type PostCreateAccountSecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostCreateAccountSecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostCreateAccountSecurity struct {
    Option1 *PostCreateAccountSecurityOption1 `security:"option"`
    Option2 *PostCreateAccountSecurityOption2 `security:"option"`
    
}

type PostCreateAccountRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostCreateAccountSecurity 
    
}

type PostCreateAccountResponse struct {
    ContentType string 
    CreateAccountResponse *interface{} 
    ServiceError *interface{} 
    StatusCode int64 
    
}

