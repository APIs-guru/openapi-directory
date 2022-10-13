package shared

type NodeDetails struct {
	IsMainNode *bool  `json:"isMainNode"`
	NodeIndex  *int64 `json:"nodeIndex"`
}
