package operations

import (
"openapi/pkg/models/shared")

type PostSetupBeneficiarySecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostSetupBeneficiarySecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostSetupBeneficiarySecurity struct {
    Option1 *PostSetupBeneficiarySecurityOption1 `security:"option"`
    Option2 *PostSetupBeneficiarySecurityOption2 `security:"option"`
    
}

type PostSetupBeneficiaryRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostSetupBeneficiarySecurity 
    
}

type PostSetupBeneficiaryResponse struct {
    ContentType string 
    ServiceError *interface{} 
    SetupBeneficiaryResponse *interface{} 
    StatusCode int64 
    
}

