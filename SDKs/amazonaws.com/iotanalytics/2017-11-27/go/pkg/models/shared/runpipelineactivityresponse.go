package shared



type RunPipelineActivityResponse struct {
    LogResult *string `json:"logResult,omitempty"`
    Payloads []string `json:"payloads,omitempty"`
    
}

