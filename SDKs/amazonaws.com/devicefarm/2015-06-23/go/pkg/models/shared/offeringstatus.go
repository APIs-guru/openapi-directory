package shared

import (
	"time"
)

// OfferingStatus
// The status of the offering.
type OfferingStatus struct {
	EffectiveOn *time.Time                   `json:"effectiveOn,omitempty"`
	Offering    *Offering                    `json:"offering,omitempty"`
	Quantity    *int64                       `json:"quantity,omitempty"`
	Type        *OfferingTransactionTypeEnum `json:"type,omitempty"`
}
