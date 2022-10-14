package shared

import (
	"time"
)

type EventSource struct {
	Arn            *string               `json:"Arn,omitempty"`
	CreatedBy      *string               `json:"CreatedBy,omitempty"`
	CreationTime   *time.Time            `json:"CreationTime,omitempty"`
	ExpirationTime *time.Time            `json:"ExpirationTime,omitempty"`
	Name           *string               `json:"Name,omitempty"`
	State          *EventSourceStateEnum `json:"State,omitempty"`
}
