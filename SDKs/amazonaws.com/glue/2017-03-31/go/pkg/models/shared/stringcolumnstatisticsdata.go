package shared



type StringColumnStatisticsData struct {
    AverageLength float64 `json:"AverageLength"`
    MaximumLength int64 `json:"MaximumLength"`
    NumberOfDistinctValues int64 `json:"NumberOfDistinctValues"`
    NumberOfNulls int64 `json:"NumberOfNulls"`
    
}

