package shared

type GetPreparedStatementInput struct {
	StatementName string `json:"StatementName"`
	WorkGroup     string `json:"WorkGroup"`
}
