package shared

// NodegroupScalingConfig
// An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
type NodegroupScalingConfig struct {
	DesiredSize *int64 `json:"desiredSize,omitempty"`
	MaxSize     *int64 `json:"maxSize,omitempty"`
	MinSize     *int64 `json:"minSize,omitempty"`
}
