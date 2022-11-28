package shared

import (
	"time"
)

// EventSource
// A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that Amazon Web Services account can receive events from the partner's applications or services.
type EventSource struct {
	Arn            *string               `json:"Arn,omitempty"`
	CreatedBy      *string               `json:"CreatedBy,omitempty"`
	CreationTime   *time.Time            `json:"CreationTime,omitempty"`
	ExpirationTime *time.Time            `json:"ExpirationTime,omitempty"`
	Name           *string               `json:"Name,omitempty"`
	State          *EventSourceStateEnum `json:"State,omitempty"`
}
