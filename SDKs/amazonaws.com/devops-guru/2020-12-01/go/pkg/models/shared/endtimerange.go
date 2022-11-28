package shared

import (
	"time"
)

// EndTimeRange
//
//	A range of time that specifies when anomalous behavior in an anomaly or insight ended.
type EndTimeRange struct {
	FromTime *time.Time `json:"FromTime,omitempty"`
	ToTime   *time.Time `json:"ToTime,omitempty"`
}
