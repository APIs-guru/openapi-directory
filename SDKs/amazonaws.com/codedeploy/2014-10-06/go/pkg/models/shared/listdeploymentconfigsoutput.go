package shared

type ListDeploymentConfigsOutput struct {
	DeploymentConfigsList []string `json:"deploymentConfigsList"`
	NextToken             *string  `json:"nextToken"`
}
