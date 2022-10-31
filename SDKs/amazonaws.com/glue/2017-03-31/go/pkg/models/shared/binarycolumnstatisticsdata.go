package shared



type BinaryColumnStatisticsData struct {
    AverageLength float64 `json:"AverageLength"`
    MaximumLength int64 `json:"MaximumLength"`
    NumberOfNulls int64 `json:"NumberOfNulls"`
    
}

