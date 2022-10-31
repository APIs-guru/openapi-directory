package operations

import (
"openapi/pkg/models/shared")

type PostGet3dsAvailabilitySecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostGet3dsAvailabilitySecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostGet3dsAvailabilitySecurity struct {
    Option1 *PostGet3dsAvailabilitySecurityOption1 `security:"option"`
    Option2 *PostGet3dsAvailabilitySecurityOption2 `security:"option"`
    
}

type PostGet3dsAvailabilityRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostGet3dsAvailabilitySecurity 
    
}

type PostGet3dsAvailabilityResponse struct {
    ContentType string 
    ServiceError *interface{} 
    StatusCode int64 
    ThreeDsAvailabilityResponse *interface{} 
    
}

