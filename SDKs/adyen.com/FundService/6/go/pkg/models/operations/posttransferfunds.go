package operations

import (
"openapi/pkg/models/shared")

type PostTransferFundsSecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostTransferFundsSecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostTransferFundsSecurity struct {
    Option1 *PostTransferFundsSecurityOption1 `security:"option"`
    Option2 *PostTransferFundsSecurityOption2 `security:"option"`
    
}

type PostTransferFundsRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostTransferFundsSecurity 
    
}

type PostTransferFundsResponse struct {
    ContentType string 
    ServiceError *interface{} 
    StatusCode int64 
    TransferFundsResponse *interface{} 
    
}

