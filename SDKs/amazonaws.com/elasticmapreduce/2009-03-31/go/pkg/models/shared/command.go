package shared



type Command struct {
    Args []string `json:"Args,omitempty"`
    Name *string `json:"Name,omitempty"`
    ScriptPath *string `json:"ScriptPath,omitempty"`
    
}

