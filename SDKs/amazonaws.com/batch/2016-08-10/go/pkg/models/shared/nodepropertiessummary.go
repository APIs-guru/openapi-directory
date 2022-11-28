package shared

// NodePropertiesSummary
// An object representing the properties of a node that's associated with a multi-node parallel job.
type NodePropertiesSummary struct {
	IsMainNode *bool  `json:"isMainNode,omitempty"`
	NodeIndex  *int64 `json:"nodeIndex,omitempty"`
	NumNodes   *int64 `json:"numNodes,omitempty"`
}
