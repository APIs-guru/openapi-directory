package shared

type ListAutoScalingConfigurationsRequest struct {
	AutoScalingConfigurationName *string `json:"AutoScalingConfigurationName,omitempty"`
	LatestOnly                   *bool   `json:"LatestOnly,omitempty"`
	MaxResults                   *int64  `json:"MaxResults,omitempty"`
	NextToken                    *string `json:"NextToken,omitempty"`
}
