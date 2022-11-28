package shared

import (
	"time"
)

// AnomalyReportedTimeRange
//
//	A time range that specifies when DevOps Guru opens and then closes an anomaly. This is different from <code>AnomalyTimeRange</code>, which specifies the time range when DevOps Guru actually observes the anomalous behavior.
type AnomalyReportedTimeRange struct {
	CloseTime *time.Time `json:"CloseTime,omitempty"`
	OpenTime  time.Time  `json:"OpenTime"`
}
