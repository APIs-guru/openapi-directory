package shared

type GetQueryResultsInput struct {
	MaxResults       *int64  `json:"MaxResults"`
	NextToken        *string `json:"NextToken"`
	QueryExecutionID string  `json:"QueryExecutionId"`
}
