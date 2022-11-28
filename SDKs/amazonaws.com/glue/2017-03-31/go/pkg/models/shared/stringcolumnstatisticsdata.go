package shared

// StringColumnStatisticsData
// Defines column statistics supported for character sequence data values.
type StringColumnStatisticsData struct {
	AverageLength          float64 `json:"AverageLength"`
	MaximumLength          int64   `json:"MaximumLength"`
	NumberOfDistinctValues int64   `json:"NumberOfDistinctValues"`
	NumberOfNulls          int64   `json:"NumberOfNulls"`
}
