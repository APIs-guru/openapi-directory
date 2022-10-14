package shared

type ListQueryExecutionsOutput struct {
	NextToken         *string  `json:"NextToken,omitempty"`
	QueryExecutionIds []string `json:"QueryExecutionIds,omitempty"`
}
