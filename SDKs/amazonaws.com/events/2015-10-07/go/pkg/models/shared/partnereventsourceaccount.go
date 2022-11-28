package shared

import (
	"time"
)

// PartnerEventSourceAccount
// The Amazon Web Services account that a partner event source has been offered to.
type PartnerEventSourceAccount struct {
	Account        *string               `json:"Account,omitempty"`
	CreationTime   *time.Time            `json:"CreationTime,omitempty"`
	ExpirationTime *time.Time            `json:"ExpirationTime,omitempty"`
	State          *EventSourceStateEnum `json:"State,omitempty"`
}
