package shared

// ExperimentState
// Describes the state of an experiment.
type ExperimentState struct {
	Reason *string               `json:"reason,omitempty"`
	Status *ExperimentStatusEnum `json:"status,omitempty"`
}
