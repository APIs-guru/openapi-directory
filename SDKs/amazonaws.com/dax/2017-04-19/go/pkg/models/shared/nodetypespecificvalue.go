package shared

// NodeTypeSpecificValue
// Represents a parameter value that is applicable to a particular node type.
type NodeTypeSpecificValue struct {
	NodeType *string `json:"NodeType,omitempty"`
	Value    *string `json:"Value,omitempty"`
}
