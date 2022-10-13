package shared

type ListDeploymentInstancesOutput struct {
	InstancesList []string `json:"instancesList"`
	NextToken     *string  `json:"nextToken"`
}
