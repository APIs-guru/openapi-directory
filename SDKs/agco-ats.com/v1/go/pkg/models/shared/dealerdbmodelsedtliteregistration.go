package shared

import (
	"time"
)

type DealerDbModelsEdtLiteRegistration struct {
	DealerCode     *string   `json:"DealerCode" form:"name=DealerCode"`
	ExpirationDate time.Time `json:"ExpirationDate" form:"name=ExpirationDate"`
	InstanceID     string    `json:"InstanceID" form:"name=InstanceID"`
	VoucherCode    string    `json:"VoucherCode" form:"name=VoucherCode"`
}
