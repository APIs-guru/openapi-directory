package shared

import (
	"time"
)

// PredictionTimeRange
//
//	The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
type PredictionTimeRange struct {
	EndTime   *time.Time `json:"EndTime,omitempty"`
	StartTime time.Time  `json:"StartTime"`
}
