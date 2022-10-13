package shared

type BatchStatementRequest struct {
	ConsistentRead *bool            `json:"ConsistentRead"`
	Parameters     []AttributeValue `json:"Parameters"`
	Statement      string           `json:"Statement"`
}
