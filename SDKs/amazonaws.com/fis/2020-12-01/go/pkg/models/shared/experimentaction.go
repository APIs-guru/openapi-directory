package shared

type ExperimentAction struct {
	ActionID    *string                `json:"actionId"`
	Description *string                `json:"description"`
	Parameters  map[string]string      `json:"parameters"`
	StartAfter  []string               `json:"startAfter"`
	State       *ExperimentActionState `json:"state"`
	Targets     map[string]string      `json:"targets"`
}
