package operations

import (
"openapi/pkg/models/shared")

type PostGetNotificationConfigurationSecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostGetNotificationConfigurationSecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostGetNotificationConfigurationSecurity struct {
    Option1 *PostGetNotificationConfigurationSecurityOption1 `security:"option"`
    Option2 *PostGetNotificationConfigurationSecurityOption2 `security:"option"`
    
}

type PostGetNotificationConfigurationRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostGetNotificationConfigurationSecurity 
    
}

type PostGetNotificationConfigurationResponse struct {
    ContentType string 
    GetNotificationConfigurationResponse *interface{} 
    ServiceError *interface{} 
    StatusCode int64 
    
}

