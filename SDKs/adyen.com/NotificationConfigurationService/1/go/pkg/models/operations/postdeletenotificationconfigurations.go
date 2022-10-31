package operations

import (
"openapi/pkg/models/shared")

type PostDeleteNotificationConfigurationsSecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostDeleteNotificationConfigurationsSecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostDeleteNotificationConfigurationsSecurity struct {
    Option1 *PostDeleteNotificationConfigurationsSecurityOption1 `security:"option"`
    Option2 *PostDeleteNotificationConfigurationsSecurityOption2 `security:"option"`
    
}

type PostDeleteNotificationConfigurationsRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostDeleteNotificationConfigurationsSecurity 
    
}

type PostDeleteNotificationConfigurationsResponse struct {
    ContentType string 
    GenericResponse *interface{} 
    ServiceError *interface{} 
    StatusCode int64 
    
}

