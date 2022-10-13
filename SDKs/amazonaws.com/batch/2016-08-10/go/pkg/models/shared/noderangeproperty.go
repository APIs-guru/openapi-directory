package shared

type NodeRangeProperty struct {
	Container   *ContainerProperties `json:"container"`
	TargetNodes string               `json:"targetNodes"`
}
