package operations

import (
	"openapi/pkg/models/shared"
)

type VouchersGetVoucherHistoryPathParams struct {
	VoucherCode string `pathParam:"style=simple,explode=false,name=VoucherCode"`
}

type VouchersGetVoucherHistoryQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type VouchersGetVoucherHistoryRequest struct {
	PathParams  VouchersGetVoucherHistoryPathParams
	QueryParams VouchersGetVoucherHistoryQueryParams
}

type VouchersGetVoucherHistoryResponse struct {
	APIPagedResponseDealerDbModelsVoucherHistory *shared.APIPagedResponseDealerDbModelsVoucherHistory
	ContentType                                  string
	StatusCode                                   int64
}
