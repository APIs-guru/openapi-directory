package shared

// ExperimentTemplateAction
// Describes an action for an experiment template.
type ExperimentTemplateAction struct {
	ActionID    *string           `json:"actionId,omitempty"`
	Description *string           `json:"description,omitempty"`
	Parameters  map[string]string `json:"parameters,omitempty"`
	StartAfter  []string          `json:"startAfter,omitempty"`
	Targets     map[string]string `json:"targets,omitempty"`
}
