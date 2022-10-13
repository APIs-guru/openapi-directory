package shared

type ListTestGridProjectsResult struct {
	NextToken        *string           `json:"nextToken"`
	TestGridProjects []TestGridProject `json:"testGridProjects"`
}
