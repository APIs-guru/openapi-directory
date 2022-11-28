package shared

// BatchStatementRequest
//
//	A PartiQL batch statement request.
type BatchStatementRequest struct {
	ConsistentRead *bool            `json:"ConsistentRead,omitempty"`
	Parameters     []AttributeValue `json:"Parameters,omitempty"`
	Statement      string           `json:"Statement"`
}
