package shared

import (
	"time"
)

type PutPartnerEventsRequestEntry struct {
	Detail     *string    `json:"Detail"`
	DetailType *string    `json:"DetailType"`
	Resources  []string   `json:"Resources"`
	Source     *string    `json:"Source"`
	Time       *time.Time `json:"Time"`
}
