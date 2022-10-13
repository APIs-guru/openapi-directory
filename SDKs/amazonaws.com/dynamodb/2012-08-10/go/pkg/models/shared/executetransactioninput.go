package shared

type ExecuteTransactionInput struct {
	ClientRequestToken *string                  `json:"ClientRequestToken"`
	TransactStatements []ParameterizedStatement `json:"TransactStatements"`
}
