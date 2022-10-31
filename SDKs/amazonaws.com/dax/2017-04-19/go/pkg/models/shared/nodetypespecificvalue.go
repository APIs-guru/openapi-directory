package shared

type NodeTypeSpecificValue struct {
	NodeType *string `json:"NodeType,omitempty"`
	Value    *string `json:"Value,omitempty"`
}
