package shared

type Aggregates struct {
	Average           *float64 `json:"average"`
	Count             *float64 `json:"count"`
	Maximum           *float64 `json:"maximum"`
	Minimum           *float64 `json:"minimum"`
	StandardDeviation *float64 `json:"standardDeviation"`
	Sum               *float64 `json:"sum"`
}
