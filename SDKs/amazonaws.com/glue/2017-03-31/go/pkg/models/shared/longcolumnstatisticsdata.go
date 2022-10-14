package shared

type LongColumnStatisticsData struct {
	MaximumValue           *int64 `json:"MaximumValue,omitempty"`
	MinimumValue           *int64 `json:"MinimumValue,omitempty"`
	NumberOfDistinctValues int64  `json:"NumberOfDistinctValues"`
	NumberOfNulls          int64  `json:"NumberOfNulls"`
}
