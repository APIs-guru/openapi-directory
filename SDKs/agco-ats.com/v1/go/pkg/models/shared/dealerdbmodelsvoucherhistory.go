package shared

import (
	"time"
)

type DealerDbModelsVoucherHistoryTypeEnum string

const (
	DealerDbModelsVoucherHistoryTypeEnumCommercial    DealerDbModelsVoucherHistoryTypeEnum = "Commercial"
	DealerDbModelsVoucherHistoryTypeEnumInternal      DealerDbModelsVoucherHistoryTypeEnum = "Internal"
	DealerDbModelsVoucherHistoryTypeEnumTemporary     DealerDbModelsVoucherHistoryTypeEnum = "Temporary"
	DealerDbModelsVoucherHistoryTypeEnumRightToRepair DealerDbModelsVoucherHistoryTypeEnum = "RightToRepair"
)

type DealerDbModelsVoucherHistory struct {
	ChangedDate    *time.Time                            `json:"ChangedDate"`
	CreatedDate    *time.Time                            `json:"CreatedDate"`
	DealerCode     *string                               `json:"DealerCode"`
	Deleted        *bool                                 `json:"Deleted"`
	Email          *string                               `json:"Email"`
	ExpirationDate *time.Time                            `json:"ExpirationDate"`
	ID             *int32                                `json:"ID"`
	LicenseTo      *string                               `json:"LicenseTo"`
	ModifiedBy     *string                               `json:"ModifiedBy"`
	OrderNumber    *string                               `json:"OrderNumber"`
	Punched        *bool                                 `json:"Punched"`
	PunchedDate    *time.Time                            `json:"PunchedDate"`
	Purpose        *string                               `json:"Purpose"`
	Type           *DealerDbModelsVoucherHistoryTypeEnum `json:"Type"`
	VoucherCode    *string                               `json:"VoucherCode"`
}
