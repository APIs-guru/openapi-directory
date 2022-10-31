package operations

import (
"openapi/pkg/models/shared")

type PostDeleteBankAccountsSecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostDeleteBankAccountsSecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostDeleteBankAccountsSecurity struct {
    Option1 *PostDeleteBankAccountsSecurityOption1 `security:"option"`
    Option2 *PostDeleteBankAccountsSecurityOption2 `security:"option"`
    
}

type PostDeleteBankAccountsRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostDeleteBankAccountsSecurity 
    
}

type PostDeleteBankAccountsResponse struct {
    ContentType string 
    GenericResponse *interface{} 
    ServiceError *interface{} 
    StatusCode int64 
    
}

