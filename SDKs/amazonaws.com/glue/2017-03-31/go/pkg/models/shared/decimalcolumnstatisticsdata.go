package shared

type DecimalColumnStatisticsData struct {
	MaximumValue           *DecimalNumber `json:"MaximumValue"`
	MinimumValue           *DecimalNumber `json:"MinimumValue"`
	NumberOfDistinctValues int64          `json:"NumberOfDistinctValues"`
	NumberOfNulls          int64          `json:"NumberOfNulls"`
}
