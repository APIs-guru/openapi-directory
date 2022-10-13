package shared

type ListPreparedStatementsOutput struct {
	NextToken          *string                    `json:"NextToken"`
	PreparedStatements []PreparedStatementSummary `json:"PreparedStatements"`
}
