package operations

import (
"openapi/pkg/models/shared")

type DealersGetDealerbyDealerCodePathParams struct {
    DealerCode string `pathParam:"style=simple,explode=false,name=DealerCode"`
    
}

type DealersGetDealerbyDealerCodeRequest struct {
    PathParams DealersGetDealerbyDealerCodePathParams 
    
}

type DealersGetDealerbyDealerCodeResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    DealerDbModelsDealer *shared.DealerDbModelsDealer 
    StatusCode int64 
    
}

