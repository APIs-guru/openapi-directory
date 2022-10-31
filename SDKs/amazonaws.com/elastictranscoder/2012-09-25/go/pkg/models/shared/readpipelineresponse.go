package shared



type ReadPipelineResponse struct {
    Pipeline *Pipeline `json:"Pipeline,omitempty"`
    Warnings []Warning `json:"Warnings,omitempty"`
    
}

