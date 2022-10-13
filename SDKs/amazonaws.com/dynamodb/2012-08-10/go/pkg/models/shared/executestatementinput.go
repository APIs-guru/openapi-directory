package shared

type ExecuteStatementInput struct {
	ConsistentRead *bool            `json:"ConsistentRead"`
	NextToken      *string          `json:"NextToken"`
	Parameters     []AttributeValue `json:"Parameters"`
	Statement      string           `json:"Statement"`
}
