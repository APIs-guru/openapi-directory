package shared



type NodegroupScalingConfig struct {
    DesiredSize *int64 `json:"desiredSize,omitempty"`
    MaxSize *int64 `json:"maxSize,omitempty"`
    MinSize *int64 `json:"minSize,omitempty"`
    
}

