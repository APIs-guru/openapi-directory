package shared

import (
	"time"
)

type PredictionTimeRange struct {
	EndTime   *time.Time `json:"EndTime"`
	StartTime time.Time  `json:"StartTime"`
}
