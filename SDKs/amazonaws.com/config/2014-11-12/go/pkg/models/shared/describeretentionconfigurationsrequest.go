package shared

type DescribeRetentionConfigurationsRequest struct {
	NextToken                   *string  `json:"NextToken,omitempty"`
	RetentionConfigurationNames []string `json:"RetentionConfigurationNames,omitempty"`
}
