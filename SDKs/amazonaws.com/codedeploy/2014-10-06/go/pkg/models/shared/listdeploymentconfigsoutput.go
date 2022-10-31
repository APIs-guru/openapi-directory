package shared



type ListDeploymentConfigsOutput struct {
    DeploymentConfigsList []string `json:"deploymentConfigsList,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

