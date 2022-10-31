package operations

import (
"openapi/pkg/models/shared")

type PostGetPciQuestionnaireURLSecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostGetPciQuestionnaireURLSecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostGetPciQuestionnaireURLSecurity struct {
    Option1 *PostGetPciQuestionnaireURLSecurityOption1 `security:"option"`
    Option2 *PostGetPciQuestionnaireURLSecurityOption2 `security:"option"`
    
}

type PostGetPciQuestionnaireURLRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostGetPciQuestionnaireURLSecurity 
    
}

type PostGetPciQuestionnaireURLResponse struct {
    ContentType string 
    GetPciURLResponse *interface{} 
    ServiceError *interface{} 
    StatusCode int64 
    
}

