package operations

import (
"openapi/pkg/models/shared")

type PostDeletePayoutMethodsSecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostDeletePayoutMethodsSecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostDeletePayoutMethodsSecurity struct {
    Option1 *PostDeletePayoutMethodsSecurityOption1 `security:"option"`
    Option2 *PostDeletePayoutMethodsSecurityOption2 `security:"option"`
    
}

type PostDeletePayoutMethodsRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostDeletePayoutMethodsSecurity 
    
}

type PostDeletePayoutMethodsResponse struct {
    ContentType string 
    GenericResponse *interface{} 
    ServiceError *interface{} 
    StatusCode int64 
    
}

