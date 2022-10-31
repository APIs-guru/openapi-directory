package shared

type DeletePreparedStatementInput struct {
	StatementName string `json:"StatementName"`
	WorkGroup     string `json:"WorkGroup"`
}
