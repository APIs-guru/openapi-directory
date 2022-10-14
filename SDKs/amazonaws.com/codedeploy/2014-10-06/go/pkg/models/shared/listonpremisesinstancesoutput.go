package shared

type ListOnPremisesInstancesOutput struct {
	InstanceNames []string `json:"instanceNames,omitempty"`
	NextToken     *string  `json:"nextToken,omitempty"`
}
