package shared

type ListTestsResult struct {
	NextToken *string `json:"nextToken"`
	Tests     []Test  `json:"tests"`
}
