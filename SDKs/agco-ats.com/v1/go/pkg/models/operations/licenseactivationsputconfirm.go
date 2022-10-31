package operations

import (
"openapi/pkg/models/shared")

type LicenseActivationsPutConfirmPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type LicenseActivationsPutConfirmRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    DealerDbModelsLicenseActivationConfirm *shared.DealerDbModelsLicenseActivationConfirm `request:"mediaType=application/json"`
    DealerDbModelsLicenseActivationConfirm1 *shared.DealerDbModelsLicenseActivationConfirm `request:"mediaType=application/x-www-form-urlencoded"`
    DealerDbModelsLicenseActivationConfirm2 *shared.DealerDbModelsLicenseActivationConfirm `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type LicenseActivationsPutConfirmRequest struct {
    PathParams LicenseActivationsPutConfirmPathParams 
    Request LicenseActivationsPutConfirmRequests 
    
}

type LicenseActivationsPutConfirmResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

