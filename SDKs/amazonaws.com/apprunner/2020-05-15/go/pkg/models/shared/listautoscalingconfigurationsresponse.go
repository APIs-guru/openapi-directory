package shared

type ListAutoScalingConfigurationsResponse struct {
	AutoScalingConfigurationSummaryList []AutoScalingConfigurationSummary `json:"AutoScalingConfigurationSummaryList"`
	NextToken                           *string                           `json:"NextToken"`
}
