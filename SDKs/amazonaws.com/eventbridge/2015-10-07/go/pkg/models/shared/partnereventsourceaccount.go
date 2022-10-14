package shared

import (
	"time"
)

type PartnerEventSourceAccount struct {
	Account        *string               `json:"Account,omitempty"`
	CreationTime   *time.Time            `json:"CreationTime,omitempty"`
	ExpirationTime *time.Time            `json:"ExpirationTime,omitempty"`
	State          *EventSourceStateEnum `json:"State,omitempty"`
}
