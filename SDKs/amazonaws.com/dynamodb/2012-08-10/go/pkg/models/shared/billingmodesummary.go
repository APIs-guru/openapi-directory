package shared

import (
"time")

type BillingModeSummary struct {
    BillingMode *BillingModeEnum `json:"BillingMode,omitempty"`
    LastUpdateToPayPerRequestDateTime *time.Time `json:"LastUpdateToPayPerRequestDateTime,omitempty"`
    
}

