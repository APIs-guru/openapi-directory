package shared

import (
	"time"
)

type CostEstimationTimeRange struct {
	EndTime   *time.Time `json:"EndTime,omitempty"`
	StartTime *time.Time `json:"StartTime,omitempty"`
}
