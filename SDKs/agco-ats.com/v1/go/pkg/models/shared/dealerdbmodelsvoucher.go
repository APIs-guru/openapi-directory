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

type DealerDbModelsVoucher struct {
	CreatedDate    *time.Time                     `json:"CreatedDate" form:"name=CreatedDate"`
	DealerCode     *string                        `json:"DealerCode" form:"name=DealerCode"`
	Deleted        *bool                          `json:"Deleted" form:"name=Deleted"`
	Email          *string                        `json:"Email" form:"name=Email"`
	ExpirationDate *time.Time                     `json:"ExpirationDate" form:"name=ExpirationDate"`
	LicenseTo      *string                        `json:"LicenseTo" form:"name=LicenseTo"`
	ModifiedBy     *string                        `json:"ModifiedBy" form:"name=ModifiedBy"`
	OrderNumber    *string                        `json:"OrderNumber" form:"name=OrderNumber"`
	Punched        *bool                          `json:"Punched" form:"name=Punched"`
	PunchedDate    *time.Time                     `json:"PunchedDate" form:"name=PunchedDate"`
	Purpose        *string                        `json:"Purpose" form:"name=Purpose"`
	Type           *DealerDbModelsVoucherTypeEnum `json:"Type" form:"name=Type"`
	VoucherCode    *string                        `json:"VoucherCode" form:"name=VoucherCode"`
}
