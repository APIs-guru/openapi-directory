package shared

import (
	"time"
)

type OfferingStatus struct {
	EffectiveOn *time.Time                   `json:"effectiveOn"`
	Offering    *Offering                    `json:"offering"`
	Quantity    *int64                       `json:"quantity"`
	Type        *OfferingTransactionTypeEnum `json:"type"`
}
