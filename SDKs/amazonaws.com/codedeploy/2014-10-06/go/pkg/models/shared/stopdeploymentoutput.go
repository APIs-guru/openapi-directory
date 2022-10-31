package shared



type StopDeploymentOutput struct {
    Status *StopStatusEnum `json:"status,omitempty"`
    StatusMessage *string `json:"statusMessage,omitempty"`
    
}

