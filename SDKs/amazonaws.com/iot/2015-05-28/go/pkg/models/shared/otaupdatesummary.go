package shared

import (
	"time"
)

type OtaUpdateSummary struct {
	CreationDate *time.Time `json:"creationDate,omitempty"`
	OtaUpdateArn *string    `json:"otaUpdateArn,omitempty"`
	OtaUpdateID  *string    `json:"otaUpdateId,omitempty"`
}
