package shared



type Statistics struct {
    Avg *float64 `json:"Avg,omitempty"`
    Count *int64 `json:"Count,omitempty"`
    CountDistinct *int64 `json:"CountDistinct,omitempty"`
    CountDistinctLong *int64 `json:"CountDistinctLong,omitempty"`
    CountLong *int64 `json:"CountLong,omitempty"`
    CountNan *int64 `json:"CountNan,omitempty"`
    CountNanLong *int64 `json:"CountNanLong,omitempty"`
    CountNull *int64 `json:"CountNull,omitempty"`
    CountNullLong *int64 `json:"CountNullLong,omitempty"`
    Max *string `json:"Max,omitempty"`
    Min *string `json:"Min,omitempty"`
    Stddev *float64 `json:"Stddev,omitempty"`
    
}

