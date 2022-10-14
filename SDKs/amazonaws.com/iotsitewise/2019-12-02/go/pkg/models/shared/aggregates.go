package shared

type Aggregates struct {
	Average           *float64 `json:"average,omitempty"`
	Count             *float64 `json:"count,omitempty"`
	Maximum           *float64 `json:"maximum,omitempty"`
	Minimum           *float64 `json:"minimum,omitempty"`
	StandardDeviation *float64 `json:"standardDeviation,omitempty"`
	Sum               *float64 `json:"sum,omitempty"`
}
