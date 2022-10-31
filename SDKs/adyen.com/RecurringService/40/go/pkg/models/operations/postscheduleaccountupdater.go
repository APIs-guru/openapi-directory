package operations

import (
"openapi/pkg/models/shared")

type PostScheduleAccountUpdaterSecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostScheduleAccountUpdaterSecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostScheduleAccountUpdaterSecurity struct {
    Option1 *PostScheduleAccountUpdaterSecurityOption1 `security:"option"`
    Option2 *PostScheduleAccountUpdaterSecurityOption2 `security:"option"`
    
}

type PostScheduleAccountUpdaterRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostScheduleAccountUpdaterSecurity 
    
}

type PostScheduleAccountUpdaterResponse struct {
    ContentType string 
    ScheduleAccountUpdaterResult *interface{} 
    ServiceError *interface{} 
    StatusCode int64 
    
}

