package operations

import (
"openapi/pkg/models/shared")

type PostUpdateAccountHolderStateSecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostUpdateAccountHolderStateSecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostUpdateAccountHolderStateSecurity struct {
    Option1 *PostUpdateAccountHolderStateSecurityOption1 `security:"option"`
    Option2 *PostUpdateAccountHolderStateSecurityOption2 `security:"option"`
    
}

type PostUpdateAccountHolderStateRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostUpdateAccountHolderStateSecurity 
    
}

type PostUpdateAccountHolderStateResponse struct {
    ContentType string 
    GetAccountHolderStatusResponse *interface{} 
    ServiceError *interface{} 
    StatusCode int64 
    
}

