package shared

type ExecuteTransactionInput struct {
	ClientRequestToken *string                  `json:"ClientRequestToken,omitempty"`
	TransactStatements []ParameterizedStatement `json:"TransactStatements"`
}
