package shared

import (
	"time"
)

type DateColumnStatisticsData struct {
	MaximumValue           *time.Time `json:"MaximumValue"`
	MinimumValue           *time.Time `json:"MinimumValue"`
	NumberOfDistinctValues int64      `json:"NumberOfDistinctValues"`
	NumberOfNulls          int64      `json:"NumberOfNulls"`
}
