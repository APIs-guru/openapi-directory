package shared



type Statistics struct {
    Average *float64 `json:"average,omitempty"`
    Count *int64 `json:"count,omitempty"`
    Maximum *float64 `json:"maximum,omitempty"`
    Minimum *float64 `json:"minimum,omitempty"`
    StdDeviation *float64 `json:"stdDeviation,omitempty"`
    Sum *float64 `json:"sum,omitempty"`
    SumOfSquares *float64 `json:"sumOfSquares,omitempty"`
    Variance *float64 `json:"variance,omitempty"`
    
}

