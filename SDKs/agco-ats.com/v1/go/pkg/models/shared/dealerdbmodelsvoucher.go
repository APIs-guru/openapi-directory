package shared

import (
	"time"
)

type DealerDbModelsVoucherTypeEnum string

const (
	DealerDbModelsVoucherTypeEnumCommercial    DealerDbModelsVoucherTypeEnum = "Commercial"
	DealerDbModelsVoucherTypeEnumInternal      DealerDbModelsVoucherTypeEnum = "Internal"
	DealerDbModelsVoucherTypeEnumTemporary     DealerDbModelsVoucherTypeEnum = "Temporary"
	DealerDbModelsVoucherTypeEnumRightToRepair DealerDbModelsVoucherTypeEnum = "RightToRepair"
)

// DealerDbModelsVoucher
// A voucher for EDT activation
type DealerDbModelsVoucher struct {
	CreatedDate    *time.Time                     `json:"CreatedDate,omitempty" form:"name=CreatedDate"`
	DealerCode     *string                        `json:"DealerCode,omitempty" form:"name=DealerCode"`
	Deleted        *bool                          `json:"Deleted,omitempty" form:"name=Deleted"`
	Email          *string                        `json:"Email,omitempty" form:"name=Email"`
	ExpirationDate *time.Time                     `json:"ExpirationDate,omitempty" form:"name=ExpirationDate"`
	LicenseTo      *string                        `json:"LicenseTo,omitempty" form:"name=LicenseTo"`
	ModifiedBy     *string                        `json:"ModifiedBy,omitempty" form:"name=ModifiedBy"`
	OrderNumber    *string                        `json:"OrderNumber,omitempty" form:"name=OrderNumber"`
	Punched        *bool                          `json:"Punched,omitempty" form:"name=Punched"`
	PunchedDate    *time.Time                     `json:"PunchedDate,omitempty" form:"name=PunchedDate"`
	Purpose        *string                        `json:"Purpose,omitempty" form:"name=Purpose"`
	Type           *DealerDbModelsVoucherTypeEnum `json:"Type,omitempty" form:"name=Type"`
	VoucherCode    *string                        `json:"VoucherCode,omitempty" form:"name=VoucherCode"`
}
