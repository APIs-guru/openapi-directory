package shared

type NodegroupScalingConfig struct {
	DesiredSize *int64 `json:"desiredSize"`
	MaxSize     *int64 `json:"maxSize"`
	MinSize     *int64 `json:"minSize"`
}
