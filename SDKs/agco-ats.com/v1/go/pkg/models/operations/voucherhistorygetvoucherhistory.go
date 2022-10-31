package operations

import (
"time"
"openapi/pkg/models/shared")

type VoucherHistoryGetVoucherHistoryQueryParams struct {
    ChangedAfter *time.Time `queryParam:"style=form,explode=true,name=ChangedAfter"`
    ChangedBefore *time.Time `queryParam:"style=form,explode=true,name=ChangedBefore"`
    VoucherCode *string `queryParam:"style=form,explode=true,name=VoucherCode"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type VoucherHistoryGetVoucherHistoryRequest struct {
    QueryParams VoucherHistoryGetVoucherHistoryQueryParams 
    
}

type VoucherHistoryGetVoucherHistoryResponse struct {
    APIPagedResponseDealerDbModelsVoucherHistory *shared.APIPagedResponseDealerDbModelsVoucherHistory 
    ContentType string 
    StatusCode int64 
    
}

