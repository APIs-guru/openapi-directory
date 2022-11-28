package shared

import (
	"time"
)

// DateColumnStatisticsData
// Defines column statistics supported for timestamp data columns.
type DateColumnStatisticsData struct {
	MaximumValue           *time.Time `json:"MaximumValue,omitempty"`
	MinimumValue           *time.Time `json:"MinimumValue,omitempty"`
	NumberOfDistinctValues int64      `json:"NumberOfDistinctValues"`
	NumberOfNulls          int64      `json:"NumberOfNulls"`
}
