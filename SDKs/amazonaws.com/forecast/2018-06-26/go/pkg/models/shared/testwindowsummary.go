package shared

import (
	"time"
)

type TestWindowSummary struct {
	Message         *string    `json:"Message,omitempty"`
	Status          *string    `json:"Status,omitempty"`
	TestWindowEnd   *time.Time `json:"TestWindowEnd,omitempty"`
	TestWindowStart *time.Time `json:"TestWindowStart,omitempty"`
}
