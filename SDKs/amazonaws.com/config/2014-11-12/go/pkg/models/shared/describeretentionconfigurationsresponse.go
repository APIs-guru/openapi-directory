package shared

type DescribeRetentionConfigurationsResponse struct {
	NextToken               *string                  `json:"NextToken,omitempty"`
	RetentionConfigurations []RetentionConfiguration `json:"RetentionConfigurations,omitempty"`
}
