package shared



type ActionSummary struct {
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Targets map[string]ActionTarget `json:"targets,omitempty"`
    
}

