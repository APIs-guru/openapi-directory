package shared

import (
	"time"
)

// InsightTimeRange
//
//	A time ranged that specifies when the observed behavior in an insight started and ended.
type InsightTimeRange struct {
	EndTime   *time.Time `json:"EndTime,omitempty"`
	StartTime time.Time  `json:"StartTime"`
}
