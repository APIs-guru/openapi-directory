package shared



type DecimalColumnStatisticsData struct {
    MaximumValue *DecimalNumber `json:"MaximumValue,omitempty"`
    MinimumValue *DecimalNumber `json:"MinimumValue,omitempty"`
    NumberOfDistinctValues int64 `json:"NumberOfDistinctValues"`
    NumberOfNulls int64 `json:"NumberOfNulls"`
    
}

