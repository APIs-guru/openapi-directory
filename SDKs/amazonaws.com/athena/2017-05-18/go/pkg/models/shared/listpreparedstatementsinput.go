package shared

type ListPreparedStatementsInput struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	WorkGroup  string  `json:"WorkGroup"`
}
