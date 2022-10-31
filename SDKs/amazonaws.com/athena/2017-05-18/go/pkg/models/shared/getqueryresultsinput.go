package shared

type GetQueryResultsInput struct {
	MaxResults       *int64  `json:"MaxResults,omitempty"`
	NextToken        *string `json:"NextToken,omitempty"`
	QueryExecutionID string  `json:"QueryExecutionId"`
}
