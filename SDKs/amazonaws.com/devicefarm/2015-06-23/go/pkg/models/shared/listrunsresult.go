package shared

type ListRunsResult struct {
	NextToken *string `json:"nextToken"`
	Runs      []Run   `json:"runs"`
}
