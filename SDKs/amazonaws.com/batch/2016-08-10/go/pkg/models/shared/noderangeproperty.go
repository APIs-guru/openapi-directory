package shared

// NodeRangeProperty
// An object representing the properties of the node range for a multi-node parallel job.
type NodeRangeProperty struct {
	Container   *ContainerProperties `json:"container,omitempty"`
	TargetNodes string               `json:"targetNodes"`
}
