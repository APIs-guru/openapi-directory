package operations

import (
"openapi/pkg/models/shared")

type PostAccountHolderBalanceSecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostAccountHolderBalanceSecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostAccountHolderBalanceSecurity struct {
    Option1 *PostAccountHolderBalanceSecurityOption1 `security:"option"`
    Option2 *PostAccountHolderBalanceSecurityOption2 `security:"option"`
    
}

type PostAccountHolderBalanceRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostAccountHolderBalanceSecurity 
    
}

type PostAccountHolderBalanceResponse struct {
    AccountHolderBalanceResponse *interface{} 
    ContentType string 
    ServiceError *interface{} 
    StatusCode int64 
    
}

