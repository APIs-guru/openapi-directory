package shared

import (
	"time"
)

type TestWindowSummary struct {
	Message         *string    `json:"Message"`
	Status          *string    `json:"Status"`
	TestWindowEnd   *time.Time `json:"TestWindowEnd"`
	TestWindowStart *time.Time `json:"TestWindowStart"`
}
