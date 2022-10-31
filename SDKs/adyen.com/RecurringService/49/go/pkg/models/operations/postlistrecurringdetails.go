package operations

import (
"openapi/pkg/models/shared")

type PostListRecurringDetailsSecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostListRecurringDetailsSecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostListRecurringDetailsSecurity struct {
    Option1 *PostListRecurringDetailsSecurityOption1 `security:"option"`
    Option2 *PostListRecurringDetailsSecurityOption2 `security:"option"`
    
}

type PostListRecurringDetailsRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostListRecurringDetailsSecurity 
    
}

type PostListRecurringDetailsResponse struct {
    ContentType string 
    RecurringDetailsResult *interface{} 
    ServiceError *interface{} 
    StatusCode int64 
    
}

