package operations

import (
"openapi/pkg/models/shared")

type PostDeleteSignatoriesSecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostDeleteSignatoriesSecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostDeleteSignatoriesSecurity struct {
    Option1 *PostDeleteSignatoriesSecurityOption1 `security:"option"`
    Option2 *PostDeleteSignatoriesSecurityOption2 `security:"option"`
    
}

type PostDeleteSignatoriesRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostDeleteSignatoriesSecurity 
    
}

type PostDeleteSignatoriesResponse struct {
    ContentType string 
    GenericResponse *interface{} 
    ServiceError *interface{} 
    StatusCode int64 
    
}

