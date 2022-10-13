package shared

import (
	"time"
)

type AnomalyReportedTimeRange struct {
	CloseTime *time.Time `json:"CloseTime"`
	OpenTime  time.Time  `json:"OpenTime"`
}
