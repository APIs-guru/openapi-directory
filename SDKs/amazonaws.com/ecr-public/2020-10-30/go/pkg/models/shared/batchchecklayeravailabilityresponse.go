package shared

type BatchCheckLayerAvailabilityResponse struct {
	Failures []LayerFailure `json:"failures,omitempty"`
	Layers   []Layer        `json:"layers,omitempty"`
}
