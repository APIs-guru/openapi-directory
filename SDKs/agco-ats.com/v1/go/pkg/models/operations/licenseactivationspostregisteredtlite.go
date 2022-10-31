package operations

import (
"openapi/pkg/models/shared")

type LicenseActivationsPostRegisterEdtLiteRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    DealerDbModelsEdtLiteRegistration *shared.DealerDbModelsEdtLiteRegistration `request:"mediaType=application/json"`
    DealerDbModelsEdtLiteRegistration1 *shared.DealerDbModelsEdtLiteRegistration `request:"mediaType=application/x-www-form-urlencoded"`
    DealerDbModelsEdtLiteRegistration2 *shared.DealerDbModelsEdtLiteRegistration `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type LicenseActivationsPostRegisterEdtLiteRequest struct {
    Request LicenseActivationsPostRegisterEdtLiteRequests 
    
}

type LicenseActivationsPostRegisterEdtLiteResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    LicenseActivationsPostRegisterEdtLite200ApplicationJSONBoolean *bool 
    LicenseActivationsPostRegisterEdtLite200TextJSONBoolean *bool 
    StatusCode int64 
    
}

