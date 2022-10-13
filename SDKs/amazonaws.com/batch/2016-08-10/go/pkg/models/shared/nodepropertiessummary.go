package shared

type NodePropertiesSummary struct {
	IsMainNode *bool  `json:"isMainNode"`
	NodeIndex  *int64 `json:"nodeIndex"`
	NumNodes   *int64 `json:"numNodes"`
}
