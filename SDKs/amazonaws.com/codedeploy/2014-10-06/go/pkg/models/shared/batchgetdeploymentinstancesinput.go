package shared



type BatchGetDeploymentInstancesInput struct {
    DeploymentID string `json:"deploymentId"`
    InstanceIds []string `json:"instanceIds"`
    
}

