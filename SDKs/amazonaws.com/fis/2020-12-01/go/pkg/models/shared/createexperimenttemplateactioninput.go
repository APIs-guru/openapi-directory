package shared



type CreateExperimentTemplateActionInput struct {
    ActionID string `json:"actionId"`
    Description *string `json:"description,omitempty"`
    Parameters map[string]string `json:"parameters,omitempty"`
    StartAfter []string `json:"startAfter,omitempty"`
    Targets map[string]string `json:"targets,omitempty"`
    
}

