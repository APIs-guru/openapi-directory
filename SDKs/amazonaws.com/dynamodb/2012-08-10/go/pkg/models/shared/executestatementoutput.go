package shared

type ExecuteStatementOutput struct {
	Items     []map[string]AttributeValue `json:"Items"`
	NextToken *string                     `json:"NextToken"`
}
