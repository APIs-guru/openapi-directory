package shared

type UpdateExperimentTemplateActionInputItem struct {
	ActionID    *string           `json:"actionId"`
	Description *string           `json:"description"`
	Parameters  map[string]string `json:"parameters"`
	StartAfter  []string          `json:"startAfter"`
	Targets     map[string]string `json:"targets"`
}
