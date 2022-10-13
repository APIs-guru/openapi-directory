package shared

type BooleanColumnStatisticsData struct {
	NumberOfFalses int64 `json:"NumberOfFalses"`
	NumberOfNulls  int64 `json:"NumberOfNulls"`
	NumberOfTrues  int64 `json:"NumberOfTrues"`
}
