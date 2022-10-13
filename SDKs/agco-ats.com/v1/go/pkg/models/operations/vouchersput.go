package operations

import (
	"openapi/pkg/models/shared"
)

type VouchersPutPathParams struct {
	VoucherCode string `pathParam:"style=simple,explode=false,name=VoucherCode"`
}

type VouchersPutRequests struct {
	ApplicationXML         []byte                        `request:"mediaType=application/xml"`
	DealerDbModelsVoucher  *shared.DealerDbModelsVoucher `request:"mediaType=application/json"`
	DealerDbModelsVoucher1 *shared.DealerDbModelsVoucher `request:"mediaType=application/x-www-form-urlencoded"`
	DealerDbModelsVoucher2 *shared.DealerDbModelsVoucher `request:"mediaType=text/json"`
	TextXML                []byte                        `request:"mediaType=text/xml"`
}

type VouchersPutRequest struct {
	PathParams VouchersPutPathParams
	Request    VouchersPutRequests
}

type VouchersPutResponse struct {
	ContentType string
	StatusCode  int64
}
