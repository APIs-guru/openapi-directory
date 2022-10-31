package shared

import (
	"time"
)

type InsightTimeRange struct {
	EndTime   *time.Time `json:"EndTime,omitempty"`
	StartTime time.Time  `json:"StartTime"`
}
