package shared

type BatchCheckLayerAvailabilityResponse struct {
	Failures []LayerFailure `json:"failures"`
	Layers   []Layer        `json:"layers"`
}
