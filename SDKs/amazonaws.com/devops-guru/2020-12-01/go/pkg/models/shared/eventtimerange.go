package shared

import (
	"time"
)

// EventTimeRange
//
//	The time range during which an AWS event occurred. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.
type EventTimeRange struct {
	FromTime time.Time `json:"FromTime"`
	ToTime   time.Time `json:"ToTime"`
}
