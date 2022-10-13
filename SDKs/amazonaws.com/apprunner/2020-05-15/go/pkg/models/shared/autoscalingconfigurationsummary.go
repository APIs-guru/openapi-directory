package shared

type AutoScalingConfigurationSummary struct {
	AutoScalingConfigurationArn      *string `json:"AutoScalingConfigurationArn"`
	AutoScalingConfigurationName     *string `json:"AutoScalingConfigurationName"`
	AutoScalingConfigurationRevision *int64  `json:"AutoScalingConfigurationRevision"`
}
