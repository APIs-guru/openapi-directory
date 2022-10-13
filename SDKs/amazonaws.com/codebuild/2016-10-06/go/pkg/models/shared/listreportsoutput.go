package shared

type ListReportsOutput struct {
	NextToken *string  `json:"nextToken"`
	Reports   []string `json:"reports"`
}
