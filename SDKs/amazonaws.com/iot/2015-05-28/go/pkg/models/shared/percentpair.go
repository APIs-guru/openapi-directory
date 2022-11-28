package shared

// PercentPair
// Describes the percentile and percentile value.
type PercentPair struct {
	Percent *float64 `json:"percent,omitempty"`
	Value   *float64 `json:"value,omitempty"`
}
