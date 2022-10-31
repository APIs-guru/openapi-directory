package shared



type CreateWorkflowRequest struct {
    DefaultRunProperties map[string]string `json:"DefaultRunProperties,omitempty"`
    Description *string `json:"Description,omitempty"`
    MaxConcurrentRuns *int64 `json:"MaxConcurrentRuns,omitempty"`
    Name string `json:"Name"`
    Tags map[string]string `json:"Tags,omitempty"`
    
}

