package shared

type AttributeValue struct {
	N   *float64           `json:"N"`
	S   *string            `json:"S"`
	Sdm map[string]float64 `json:"SDM"`
	Sl  []string           `json:"SL"`
}
