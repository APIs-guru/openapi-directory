package shared

import (
	"time"
)

// CostEstimationTimeRange
// The time range of a cost estimation.
type CostEstimationTimeRange struct {
	EndTime   *time.Time `json:"EndTime,omitempty"`
	StartTime *time.Time `json:"StartTime,omitempty"`
}
