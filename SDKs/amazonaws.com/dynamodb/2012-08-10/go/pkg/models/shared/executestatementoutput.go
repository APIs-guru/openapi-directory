package shared

type ExecuteStatementOutput struct {
	Items     []map[string]AttributeValue `json:"Items,omitempty"`
	NextToken *string                     `json:"NextToken,omitempty"`
}
