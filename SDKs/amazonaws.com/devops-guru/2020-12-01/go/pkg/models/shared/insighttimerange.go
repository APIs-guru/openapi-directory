package shared

import (
	"time"
)

type InsightTimeRange struct {
	EndTime   *time.Time `json:"EndTime"`
	StartTime time.Time  `json:"StartTime"`
}
