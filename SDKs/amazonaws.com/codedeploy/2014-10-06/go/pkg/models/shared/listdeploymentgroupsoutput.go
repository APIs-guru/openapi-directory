package shared

type ListDeploymentGroupsOutput struct {
	ApplicationName  *string  `json:"applicationName"`
	DeploymentGroups []string `json:"deploymentGroups"`
	NextToken        *string  `json:"nextToken"`
}
