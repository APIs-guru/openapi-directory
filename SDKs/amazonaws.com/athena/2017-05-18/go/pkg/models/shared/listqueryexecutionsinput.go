package shared

type ListQueryExecutionsInput struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	WorkGroup  *string `json:"WorkGroup"`
}
