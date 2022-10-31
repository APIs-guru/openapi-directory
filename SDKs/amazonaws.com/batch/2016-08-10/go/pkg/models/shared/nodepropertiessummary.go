package shared



type NodePropertiesSummary struct {
    IsMainNode *bool `json:"isMainNode,omitempty"`
    NodeIndex *int64 `json:"nodeIndex,omitempty"`
    NumNodes *int64 `json:"numNodes,omitempty"`
    
}

