package shared



type BatchGetDeploymentGroupsInput struct {
    ApplicationName string `json:"applicationName"`
    DeploymentGroupNames []string `json:"deploymentGroupNames"`
    
}

