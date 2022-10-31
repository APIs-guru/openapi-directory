package shared

import (
	"time"
)

type AnomalyReportedTimeRange struct {
	CloseTime *time.Time `json:"CloseTime,omitempty"`
	OpenTime  time.Time  `json:"OpenTime"`
}
