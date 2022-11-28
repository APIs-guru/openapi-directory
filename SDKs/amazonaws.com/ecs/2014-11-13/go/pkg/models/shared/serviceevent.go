package shared

import (
	"time"
)

// ServiceEvent
// Details on an event associated with a service.
type ServiceEvent struct {
	CreatedAt *time.Time `json:"createdAt,omitempty"`
	ID        *string    `json:"id,omitempty"`
	Message   *string    `json:"message,omitempty"`
}
