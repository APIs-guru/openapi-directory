package shared

type ListTestGridSessionsResult struct {
	NextToken        *string           `json:"nextToken,omitempty"`
	TestGridSessions []TestGridSession `json:"testGridSessions,omitempty"`
}
