package shared



type ProcessingConfiguration struct {
    Enabled *bool `json:"Enabled,omitempty"`
    Processors []Processor `json:"Processors,omitempty"`
    
}

