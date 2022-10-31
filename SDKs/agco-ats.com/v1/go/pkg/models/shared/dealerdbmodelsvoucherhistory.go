package shared

import (
"time")


type DealerDbModelsVoucherHistoryTypeEnum string

const (
    DealerDbModelsVoucherHistoryTypeEnumCommercial DealerDbModelsVoucherHistoryTypeEnum = "Commercial"
DealerDbModelsVoucherHistoryTypeEnumInternal DealerDbModelsVoucherHistoryTypeEnum = "Internal"
DealerDbModelsVoucherHistoryTypeEnumTemporary DealerDbModelsVoucherHistoryTypeEnum = "Temporary"
DealerDbModelsVoucherHistoryTypeEnumRightToRepair DealerDbModelsVoucherHistoryTypeEnum = "RightToRepair"
)


type DealerDbModelsVoucherHistory struct {
    ChangedDate *time.Time `json:"ChangedDate,omitempty"`
    CreatedDate *time.Time `json:"CreatedDate,omitempty"`
    DealerCode *string `json:"DealerCode,omitempty"`
    Deleted *bool `json:"Deleted,omitempty"`
    Email *string `json:"Email,omitempty"`
    ExpirationDate *time.Time `json:"ExpirationDate,omitempty"`
    ID *int32 `json:"ID,omitempty"`
    LicenseTo *string `json:"LicenseTo,omitempty"`
    ModifiedBy *string `json:"ModifiedBy,omitempty"`
    OrderNumber *string `json:"OrderNumber,omitempty"`
    Punched *bool `json:"Punched,omitempty"`
    PunchedDate *time.Time `json:"PunchedDate,omitempty"`
    Purpose *string `json:"Purpose,omitempty"`
    Type *DealerDbModelsVoucherHistoryTypeEnum `json:"Type,omitempty"`
    VoucherCode *string `json:"VoucherCode,omitempty"`
    
}

