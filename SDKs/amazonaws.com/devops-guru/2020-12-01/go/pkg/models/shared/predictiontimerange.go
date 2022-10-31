package shared

import (
	"time"
)

type PredictionTimeRange struct {
	EndTime   *time.Time `json:"EndTime,omitempty"`
	StartTime time.Time  `json:"StartTime"`
}
