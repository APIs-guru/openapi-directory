package shared



type UpdatePreparedStatementInput struct {
    Description *string `json:"Description,omitempty"`
    QueryStatement string `json:"QueryStatement"`
    StatementName string `json:"StatementName"`
    WorkGroup string `json:"WorkGroup"`
    
}

