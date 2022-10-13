package shared

import (
	"time"
)

type CostEstimationTimeRange struct {
	EndTime   *time.Time `json:"EndTime"`
	StartTime *time.Time `json:"StartTime"`
}
