package shared

type ListDeploymentInstancesOutput struct {
	InstancesList []string `json:"instancesList,omitempty"`
	NextToken     *string  `json:"nextToken,omitempty"`
}
