package shared

import (
	"time"
)

// AnomalyTimeRange
//
//	A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies the time range when DevOps Guru opens and then closes an anomaly.
type AnomalyTimeRange struct {
	EndTime   *time.Time `json:"EndTime,omitempty"`
	StartTime time.Time  `json:"StartTime"`
}
