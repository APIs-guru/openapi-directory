package shared

import (
	"time"
)

// OtaUpdateSummary
// An OTA update summary.
type OtaUpdateSummary struct {
	CreationDate *time.Time `json:"creationDate,omitempty"`
	OtaUpdateArn *string    `json:"otaUpdateArn,omitempty"`
	OtaUpdateID  *string    `json:"otaUpdateId,omitempty"`
}
