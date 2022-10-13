package shared

type CreatePreparedStatementInput struct {
	Description    *string `json:"Description"`
	QueryStatement string  `json:"QueryStatement"`
	StatementName  string  `json:"StatementName"`
	WorkGroup      string  `json:"WorkGroup"`
}
