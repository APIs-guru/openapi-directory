package shared

import (
	"time"
)

type ByoipCidrEvent struct {
	Message   *string    `json:"Message,omitempty"`
	Timestamp *time.Time `json:"Timestamp,omitempty"`
}
