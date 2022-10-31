package operations

import (
"openapi/pkg/models/shared")

type DealersGetDealersQueryParams struct {
    Brand *string `queryParam:"style=form,explode=true,name=Brand"`
    DealerName *string `queryParam:"style=form,explode=true,name=DealerName"`
    ShippingCountry *string `queryParam:"style=form,explode=true,name=ShippingCountry"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type DealersGetDealersRequest struct {
    QueryParams DealersGetDealersQueryParams 
    
}

type DealersGetDealersResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseDealerDbModelsDealer *shared.APIPagedResponseDealerDbModelsDealer 
    ContentType string 
    StatusCode int64 
    
}

