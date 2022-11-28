package shared

// BooleanColumnStatisticsData
// Defines column statistics supported for Boolean data columns.
type BooleanColumnStatisticsData struct {
	NumberOfFalses int64 `json:"NumberOfFalses"`
	NumberOfNulls  int64 `json:"NumberOfNulls"`
	NumberOfTrues  int64 `json:"NumberOfTrues"`
}
