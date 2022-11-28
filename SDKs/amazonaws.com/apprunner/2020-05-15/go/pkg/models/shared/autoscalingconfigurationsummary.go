package shared

// AutoScalingConfigurationSummary
// <p>Provides summary information about an AWS App Runner automatic scaling configuration resource.</p> <p>This type contains limited information about an auto scaling configuration. It includes only identification information, without configuration details. It's returned by the <a>ListAutoScalingConfigurations</a> action. Complete configuration information is returned by the <a>CreateAutoScalingConfiguration</a>, <a>DescribeAutoScalingConfiguration</a>, and <a>DeleteAutoScalingConfiguration</a> actions using the <a>AutoScalingConfiguration</a> type.</p>
type AutoScalingConfigurationSummary struct {
	AutoScalingConfigurationArn      *string `json:"AutoScalingConfigurationArn,omitempty"`
	AutoScalingConfigurationName     *string `json:"AutoScalingConfigurationName,omitempty"`
	AutoScalingConfigurationRevision *int64  `json:"AutoScalingConfigurationRevision,omitempty"`
}
