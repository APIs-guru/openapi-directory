package shared

type ListPreparedStatementsInput struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
	WorkGroup  string  `json:"WorkGroup"`
}
