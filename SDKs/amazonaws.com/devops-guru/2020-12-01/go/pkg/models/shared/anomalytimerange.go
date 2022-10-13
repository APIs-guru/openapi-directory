package shared

import (
	"time"
)

type AnomalyTimeRange struct {
	EndTime   *time.Time `json:"EndTime"`
	StartTime time.Time  `json:"StartTime"`
}
