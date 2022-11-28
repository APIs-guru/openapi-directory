package shared

// WeightedTarget
// An object representing a target and its relative weight. Traffic is distributed across
//
//	targets according to their relative weight. For example, a weighted target with a relative
//	weight of 50 receives five times as much traffic as one with a relative weight of
//	10.
type WeightedTarget struct {
	VirtualNode *string `json:"virtualNode,omitempty"`
	Weight      *int64  `json:"weight,omitempty"`
}
