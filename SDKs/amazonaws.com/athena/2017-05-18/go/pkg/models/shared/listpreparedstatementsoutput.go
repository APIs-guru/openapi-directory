package shared

type ListPreparedStatementsOutput struct {
	NextToken          *string                    `json:"NextToken,omitempty"`
	PreparedStatements []PreparedStatementSummary `json:"PreparedStatements,omitempty"`
}
