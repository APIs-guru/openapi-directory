package shared

import (
	"time"
)

// BillingGroupMetadata
// Additional information about the billing group.
type BillingGroupMetadata struct {
	CreationDate *time.Time `json:"creationDate,omitempty"`
}
