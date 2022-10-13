package shared

type ListOnPremisesInstancesOutput struct {
	InstanceNames []string `json:"instanceNames"`
	NextToken     *string  `json:"nextToken"`
}
