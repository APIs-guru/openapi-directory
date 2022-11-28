package shared

// NodeDetails
// An object representing the details of a multi-node parallel job node.
type NodeDetails struct {
	IsMainNode *bool  `json:"isMainNode,omitempty"`
	NodeIndex  *int64 `json:"nodeIndex,omitempty"`
}
