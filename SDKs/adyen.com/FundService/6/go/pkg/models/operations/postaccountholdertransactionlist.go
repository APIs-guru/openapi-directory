package operations

import (
"openapi/pkg/models/shared")

type PostAccountHolderTransactionListSecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostAccountHolderTransactionListSecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostAccountHolderTransactionListSecurity struct {
    Option1 *PostAccountHolderTransactionListSecurityOption1 `security:"option"`
    Option2 *PostAccountHolderTransactionListSecurityOption2 `security:"option"`
    
}

type PostAccountHolderTransactionListRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostAccountHolderTransactionListSecurity 
    
}

type PostAccountHolderTransactionListResponse struct {
    AccountHolderTransactionListResponse *interface{} 
    ContentType string 
    ServiceError *interface{} 
    StatusCode int64 
    
}

