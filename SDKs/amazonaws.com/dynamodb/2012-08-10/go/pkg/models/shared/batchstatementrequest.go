package shared

type BatchStatementRequest struct {
	ConsistentRead *bool            `json:"ConsistentRead,omitempty"`
	Parameters     []AttributeValue `json:"Parameters,omitempty"`
	Statement      string           `json:"Statement"`
}
