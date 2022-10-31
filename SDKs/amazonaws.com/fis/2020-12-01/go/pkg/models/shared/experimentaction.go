package shared

type ExperimentAction struct {
	ActionID    *string                `json:"actionId,omitempty"`
	Description *string                `json:"description,omitempty"`
	Parameters  map[string]string      `json:"parameters,omitempty"`
	StartAfter  []string               `json:"startAfter,omitempty"`
	State       *ExperimentActionState `json:"state,omitempty"`
	Targets     map[string]string      `json:"targets,omitempty"`
}
