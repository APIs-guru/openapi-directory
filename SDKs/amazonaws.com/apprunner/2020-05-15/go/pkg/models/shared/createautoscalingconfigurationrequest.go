package shared

type CreateAutoScalingConfigurationRequest struct {
	AutoScalingConfigurationName string `json:"AutoScalingConfigurationName"`
	MaxConcurrency               *int64 `json:"MaxConcurrency,omitempty"`
	MaxSize                      *int64 `json:"MaxSize,omitempty"`
	MinSize                      *int64 `json:"MinSize,omitempty"`
	Tags                         []Tag  `json:"Tags,omitempty"`
}
