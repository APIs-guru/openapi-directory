package shared

type StartQueryExecutionInput struct {
	ClientRequestToken    *string                `json:"ClientRequestToken"`
	QueryExecutionContext *QueryExecutionContext `json:"QueryExecutionContext"`
	QueryString           string                 `json:"QueryString"`
	ResultConfiguration   *ResultConfiguration   `json:"ResultConfiguration"`
	WorkGroup             *string                `json:"WorkGroup"`
}
