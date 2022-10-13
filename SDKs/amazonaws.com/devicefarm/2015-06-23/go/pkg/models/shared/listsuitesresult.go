package shared

type ListSuitesResult struct {
	NextToken *string `json:"nextToken"`
	Suites    []Suite `json:"suites"`
}
