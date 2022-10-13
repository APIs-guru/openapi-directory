package shared

type CreateAutoScalingConfigurationRequest struct {
	AutoScalingConfigurationName string `json:"AutoScalingConfigurationName"`
	MaxConcurrency               *int64 `json:"MaxConcurrency"`
	MaxSize                      *int64 `json:"MaxSize"`
	MinSize                      *int64 `json:"MinSize"`
	Tags                         []Tag  `json:"Tags"`
}
