package shared

type NodeRangeProperty struct {
	Container   *ContainerProperties `json:"container,omitempty"`
	TargetNodes string               `json:"targetNodes"`
}
