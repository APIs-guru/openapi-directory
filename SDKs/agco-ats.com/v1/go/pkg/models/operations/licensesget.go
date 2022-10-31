package operations

import (
"openapi/pkg/models/shared")


type LicensesGetStatusEnum string

const (
    LicensesGetStatusEnumActive LicensesGetStatusEnum = "Active"
LicensesGetStatusEnumInactive LicensesGetStatusEnum = "Inactive"
LicensesGetStatusEnumAll LicensesGetStatusEnum = "All"
)


type LicensesGetQueryParams struct {
    DealerCode *string `queryParam:"style=form,explode=true,name=DealerCode"`
    Status *LicensesGetStatusEnum `queryParam:"style=form,explode=true,name=Status"`
    VoucherCode *string `queryParam:"style=form,explode=true,name=VoucherCode"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type LicensesGetRequest struct {
    QueryParams LicensesGetQueryParams 
    
}

type LicensesGetResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseDealerDbModelsLicense *shared.APIPagedResponseDealerDbModelsLicense 
    ContentType string 
    StatusCode int64 
    
}

