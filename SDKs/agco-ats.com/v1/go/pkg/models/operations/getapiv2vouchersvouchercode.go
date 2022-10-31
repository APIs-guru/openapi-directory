package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV2VouchersVoucherCodePathParams struct {
	VoucherCode string `pathParam:"style=simple,explode=false,name=VoucherCode"`
}

type GetAPIV2VouchersVoucherCodeDeletedEnum string

const (
	GetAPIV2VouchersVoucherCodeDeletedEnumNotDeleted GetAPIV2VouchersVoucherCodeDeletedEnum = "NotDeleted"
	GetAPIV2VouchersVoucherCodeDeletedEnumDeleted    GetAPIV2VouchersVoucherCodeDeletedEnum = "Deleted"
	GetAPIV2VouchersVoucherCodeDeletedEnumAll        GetAPIV2VouchersVoucherCodeDeletedEnum = "All"
)

type GetAPIV2VouchersVoucherCodeQueryParams struct {
	Deleted *GetAPIV2VouchersVoucherCodeDeletedEnum `queryParam:"style=form,explode=true,name=Deleted"`
}

type GetAPIV2VouchersVoucherCodeRequest struct {
	PathParams  GetAPIV2VouchersVoucherCodePathParams
	QueryParams GetAPIV2VouchersVoucherCodeQueryParams
}

type GetAPIV2VouchersVoucherCodeResponse struct {
	Body                  []byte
	ContentType           string
	DealerDbModelsVoucher *shared.DealerDbModelsVoucher
	StatusCode            int64
}
