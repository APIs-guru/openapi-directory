package shared

type AttributeValue struct {
	N   *float64           `json:"N,omitempty"`
	S   *string            `json:"S,omitempty"`
	Sdm map[string]float64 `json:"SDM,omitempty"`
	Sl  []string           `json:"SL,omitempty"`
}
