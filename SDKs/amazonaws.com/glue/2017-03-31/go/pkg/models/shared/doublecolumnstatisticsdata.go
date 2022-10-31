package shared

type DoubleColumnStatisticsData struct {
	MaximumValue           *float64 `json:"MaximumValue,omitempty"`
	MinimumValue           *float64 `json:"MinimumValue,omitempty"`
	NumberOfDistinctValues int64    `json:"NumberOfDistinctValues"`
	NumberOfNulls          int64    `json:"NumberOfNulls"`
}
