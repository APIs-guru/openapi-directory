package shared

import (
	"time"
)

type PutPartnerEventsRequestEntry struct {
	Detail     *string    `json:"Detail,omitempty"`
	DetailType *string    `json:"DetailType,omitempty"`
	Resources  []string   `json:"Resources,omitempty"`
	Source     *string    `json:"Source,omitempty"`
	Time       *time.Time `json:"Time,omitempty"`
}
