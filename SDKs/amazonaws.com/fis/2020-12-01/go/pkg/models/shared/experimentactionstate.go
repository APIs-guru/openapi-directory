package shared



type ExperimentActionState struct {
    Reason *string `json:"reason,omitempty"`
    Status *ExperimentActionStatusEnum `json:"status,omitempty"`
    
}

