package shared



type NodeProperties struct {
    MainNode int64 `json:"mainNode"`
    NodeRangeProperties []NodeRangeProperty `json:"nodeRangeProperties"`
    NumNodes int64 `json:"numNodes"`
    
}

