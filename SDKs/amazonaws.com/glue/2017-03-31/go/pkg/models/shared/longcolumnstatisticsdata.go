package shared

type LongColumnStatisticsData struct {
	MaximumValue           *int64 `json:"MaximumValue"`
	MinimumValue           *int64 `json:"MinimumValue"`
	NumberOfDistinctValues int64  `json:"NumberOfDistinctValues"`
	NumberOfNulls          int64  `json:"NumberOfNulls"`
}
