package shared

type ListQueryExecutionsOutput struct {
	NextToken         *string  `json:"NextToken"`
	QueryExecutionIds []string `json:"QueryExecutionIds"`
}
