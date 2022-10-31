package shared



type ContinueDeploymentInput struct {
    DeploymentID *string `json:"deploymentId,omitempty"`
    DeploymentWaitType *DeploymentWaitTypeEnum `json:"deploymentWaitType,omitempty"`
    
}

