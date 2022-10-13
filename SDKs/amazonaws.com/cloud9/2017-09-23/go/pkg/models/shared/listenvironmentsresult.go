package shared

type ListEnvironmentsResult struct {
	EnvironmentIds []string `json:"environmentIds"`
	NextToken      *string  `json:"nextToken"`
}
