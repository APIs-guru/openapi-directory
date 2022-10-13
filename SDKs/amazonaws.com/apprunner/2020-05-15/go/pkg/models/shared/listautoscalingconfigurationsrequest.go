package shared

type ListAutoScalingConfigurationsRequest struct {
	AutoScalingConfigurationName *string `json:"AutoScalingConfigurationName"`
	LatestOnly                   *bool   `json:"LatestOnly"`
	MaxResults                   *int64  `json:"MaxResults"`
	NextToken                    *string `json:"NextToken"`
}
