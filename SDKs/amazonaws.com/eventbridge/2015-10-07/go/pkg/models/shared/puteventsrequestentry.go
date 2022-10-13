package shared

import (
	"time"
)

type PutEventsRequestEntry struct {
	Detail       *string    `json:"Detail"`
	DetailType   *string    `json:"DetailType"`
	EventBusName *string    `json:"EventBusName"`
	Resources    []string   `json:"Resources"`
	Source       *string    `json:"Source"`
	Time         *time.Time `json:"Time"`
	TraceHeader  *string    `json:"TraceHeader"`
}
