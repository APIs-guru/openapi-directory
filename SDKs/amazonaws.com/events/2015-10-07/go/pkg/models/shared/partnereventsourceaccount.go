package shared

import (
	"time"
)

type PartnerEventSourceAccount struct {
	Account        *string               `json:"Account"`
	CreationTime   *time.Time            `json:"CreationTime"`
	ExpirationTime *time.Time            `json:"ExpirationTime"`
	State          *EventSourceStateEnum `json:"State"`
}
