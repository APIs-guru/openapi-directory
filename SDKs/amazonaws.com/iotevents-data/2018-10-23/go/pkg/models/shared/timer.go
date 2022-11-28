package shared

import (
	"time"
)

// Timer
// The current state of a timer.
type Timer struct {
	Name      string    `json:"name"`
	Timestamp time.Time `json:"timestamp"`
}
