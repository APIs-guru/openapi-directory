package shared

type GetQueryResultsOutput struct {
	NextToken   *string    `json:"NextToken"`
	ResultSet   *ResultSet `json:"ResultSet"`
	UpdateCount *int64     `json:"UpdateCount"`
}
