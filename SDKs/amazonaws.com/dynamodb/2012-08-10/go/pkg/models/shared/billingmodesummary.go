package shared

import (
	"time"
)

type BillingModeSummary struct {
	BillingMode                       *BillingModeEnum `json:"BillingMode"`
	LastUpdateToPayPerRequestDateTime *time.Time       `json:"LastUpdateToPayPerRequestDateTime"`
}
