package shared



type ComponentParameterDetail struct {
    DefaultValue []string `json:"defaultValue,omitempty"`
    Description *string `json:"description,omitempty"`
    Name string `json:"name"`
    Type string `json:"type"`
    
}

