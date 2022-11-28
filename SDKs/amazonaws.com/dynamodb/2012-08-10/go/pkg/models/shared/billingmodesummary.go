package shared

import (
	"time"
)

// BillingModeSummary
// Contains the details for the read/write capacity mode.
type BillingModeSummary struct {
	BillingMode                       *BillingModeEnum `json:"BillingMode,omitempty"`
	LastUpdateToPayPerRequestDateTime *time.Time       `json:"LastUpdateToPayPerRequestDateTime,omitempty"`
}
