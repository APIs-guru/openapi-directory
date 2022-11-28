package shared

// BinaryColumnStatisticsData
// Defines column statistics supported for bit sequence data values.
type BinaryColumnStatisticsData struct {
	AverageLength float64 `json:"AverageLength"`
	MaximumLength int64   `json:"MaximumLength"`
	NumberOfNulls int64   `json:"NumberOfNulls"`
}
