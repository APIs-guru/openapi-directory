package shared



type UpdatePipelineResponse struct {
    Pipeline *Pipeline `json:"Pipeline,omitempty"`
    Warnings []Warning `json:"Warnings,omitempty"`
    
}

