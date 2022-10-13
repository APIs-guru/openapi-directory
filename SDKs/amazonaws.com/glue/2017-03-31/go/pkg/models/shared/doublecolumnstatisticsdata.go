package shared

type DoubleColumnStatisticsData struct {
	MaximumValue           *float64 `json:"MaximumValue"`
	MinimumValue           *float64 `json:"MinimumValue"`
	NumberOfDistinctValues int64    `json:"NumberOfDistinctValues"`
	NumberOfNulls          int64    `json:"NumberOfNulls"`
}
