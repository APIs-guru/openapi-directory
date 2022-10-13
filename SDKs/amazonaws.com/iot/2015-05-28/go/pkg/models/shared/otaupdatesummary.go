package shared

import (
	"time"
)

type OtaUpdateSummary struct {
	CreationDate *time.Time `json:"creationDate"`
	OtaUpdateArn *string    `json:"otaUpdateArn"`
	OtaUpdateID  *string    `json:"otaUpdateId"`
}
