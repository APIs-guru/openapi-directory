package shared

type NodeDetails struct {
	IsMainNode *bool  `json:"isMainNode,omitempty"`
	NodeIndex  *int64 `json:"nodeIndex,omitempty"`
}
