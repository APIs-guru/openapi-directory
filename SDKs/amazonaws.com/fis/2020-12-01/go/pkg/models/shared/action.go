package shared



type Action struct {
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    Parameters map[string]ActionParameter `json:"parameters,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Targets map[string]ActionTarget `json:"targets,omitempty"`
    
}

