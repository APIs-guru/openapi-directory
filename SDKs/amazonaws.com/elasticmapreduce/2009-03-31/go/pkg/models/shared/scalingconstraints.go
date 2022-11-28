package shared

// ScalingConstraints
// The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or below these limits.
type ScalingConstraints struct {
	MaxCapacity int64 `json:"MaxCapacity"`
	MinCapacity int64 `json:"MinCapacity"`
}
