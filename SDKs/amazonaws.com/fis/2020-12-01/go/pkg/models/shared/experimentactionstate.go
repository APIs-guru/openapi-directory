package shared

// ExperimentActionState
// Describes the state of an action.
type ExperimentActionState struct {
	Reason *string                     `json:"reason,omitempty"`
	Status *ExperimentActionStatusEnum `json:"status,omitempty"`
}
