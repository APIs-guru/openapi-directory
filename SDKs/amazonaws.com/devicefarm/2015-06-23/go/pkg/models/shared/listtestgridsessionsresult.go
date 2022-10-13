package shared

type ListTestGridSessionsResult struct {
	NextToken        *string           `json:"nextToken"`
	TestGridSessions []TestGridSession `json:"testGridSessions"`
}
