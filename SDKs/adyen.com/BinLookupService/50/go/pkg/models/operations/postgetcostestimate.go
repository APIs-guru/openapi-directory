package operations

import (
"openapi/pkg/models/shared")

type PostGetCostEstimateSecurityOption1 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostGetCostEstimateSecurityOption2 struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostGetCostEstimateSecurity struct {
    Option1 *PostGetCostEstimateSecurityOption1 `security:"option"`
    Option2 *PostGetCostEstimateSecurityOption2 `security:"option"`
    
}

type PostGetCostEstimateRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security PostGetCostEstimateSecurity 
    
}

type PostGetCostEstimateResponse struct {
    ContentType string 
    CostEstimateResponse *interface{} 
    ServiceError *interface{} 
    StatusCode int64 
    
}

