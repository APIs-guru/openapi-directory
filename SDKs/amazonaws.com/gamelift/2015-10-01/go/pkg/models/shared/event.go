package shared

import (
	"time"
)

type Event struct {
	EventCode       *EventCodeEnum `json:"EventCode"`
	EventID         *string        `json:"EventId"`
	EventTime       *time.Time     `json:"EventTime"`
	Message         *string        `json:"Message"`
	PreSignedLogURL *string        `json:"PreSignedLogUrl"`
	ResourceID      *string        `json:"ResourceId"`
}
