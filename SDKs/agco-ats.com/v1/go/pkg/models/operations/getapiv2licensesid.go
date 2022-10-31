package operations

import (
"openapi/pkg/models/shared")

type GetAPIV2LicensesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type GetAPIV2LicensesIDRequest struct {
    PathParams GetAPIV2LicensesIDPathParams 
    
}

type GetAPIV2LicensesIDResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    DealerDbModelsLicense *shared.DealerDbModelsLicense 
    StatusCode int64 
    
}

