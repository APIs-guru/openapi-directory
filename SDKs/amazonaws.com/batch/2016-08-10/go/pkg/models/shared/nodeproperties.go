package shared

// NodeProperties
// An object representing the node properties of a multi-node parallel job.
type NodeProperties struct {
	MainNode            int64               `json:"mainNode"`
	NodeRangeProperties []NodeRangeProperty `json:"nodeRangeProperties"`
	NumNodes            int64               `json:"numNodes"`
}
