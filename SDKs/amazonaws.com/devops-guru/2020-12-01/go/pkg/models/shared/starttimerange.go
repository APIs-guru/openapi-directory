package shared

import (
	"time"
)

// StartTimeRange
//
//	A time range used to specify when the behavior of an insight or anomaly started.
type StartTimeRange struct {
	FromTime *time.Time `json:"FromTime,omitempty"`
	ToTime   *time.Time `json:"ToTime,omitempty"`
}
