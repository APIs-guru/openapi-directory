package operations

import (
"openapi/pkg/models/shared")

type PostCreateTestCardRangesSecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostCreateTestCardRangesSecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostCreateTestCardRangesSecurity struct {
    Option1 *PostCreateTestCardRangesSecurityOption1 `security:"option"`
    Option2 *PostCreateTestCardRangesSecurityOption2 `security:"option"`
    
}

type PostCreateTestCardRangesRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostCreateTestCardRangesSecurity 
    
}

type PostCreateTestCardRangesResponse struct {
    ContentType string 
    CreateTestCardRangesResult *interface{} 
    ServiceError *interface{} 
    StatusCode int64 
    
}

