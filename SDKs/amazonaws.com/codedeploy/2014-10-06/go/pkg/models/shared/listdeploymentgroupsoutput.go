package shared



type ListDeploymentGroupsOutput struct {
    ApplicationName *string `json:"applicationName,omitempty"`
    DeploymentGroups []string `json:"deploymentGroups,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

