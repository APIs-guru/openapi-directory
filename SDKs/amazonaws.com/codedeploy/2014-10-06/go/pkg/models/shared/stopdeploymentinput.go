package shared



type StopDeploymentInput struct {
    AutoRollbackEnabled *bool `json:"autoRollbackEnabled,omitempty"`
    DeploymentID string `json:"deploymentId"`
    
}

