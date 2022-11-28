package shared

// WeightedTarget
// An object that represents a target and its relative weight. Traffic is distributed across targets according to their relative weight. For example, a weighted target with a relative weight of 50 receives five times as much traffic as one with a relative weight of 10. The total weight for all targets combined must be less than or equal to 100.
type WeightedTarget struct {
	VirtualNode string `json:"virtualNode"`
	Weight      int64  `json:"weight"`
}
