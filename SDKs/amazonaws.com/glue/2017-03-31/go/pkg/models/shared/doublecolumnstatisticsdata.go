package shared

// DoubleColumnStatisticsData
// Defines column statistics supported for floating-point number data columns.
type DoubleColumnStatisticsData struct {
	MaximumValue           *float64 `json:"MaximumValue,omitempty"`
	MinimumValue           *float64 `json:"MinimumValue,omitempty"`
	NumberOfDistinctValues int64    `json:"NumberOfDistinctValues"`
	NumberOfNulls          int64    `json:"NumberOfNulls"`
}
