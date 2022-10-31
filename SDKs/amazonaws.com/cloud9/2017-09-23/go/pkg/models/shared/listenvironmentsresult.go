package shared

type ListEnvironmentsResult struct {
	EnvironmentIds []string `json:"environmentIds,omitempty"`
	NextToken      *string  `json:"nextToken,omitempty"`
}
