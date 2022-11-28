package shared

import (
	"time"
)

// TestWindowSummary
// The status, start time, and end time of a backtest, as well as a failure reason if applicable.
type TestWindowSummary struct {
	Message         *string    `json:"Message,omitempty"`
	Status          *string    `json:"Status,omitempty"`
	TestWindowEnd   *time.Time `json:"TestWindowEnd,omitempty"`
	TestWindowStart *time.Time `json:"TestWindowStart,omitempty"`
}
