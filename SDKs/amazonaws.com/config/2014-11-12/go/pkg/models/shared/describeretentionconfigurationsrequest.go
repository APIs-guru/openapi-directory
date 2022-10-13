package shared

type DescribeRetentionConfigurationsRequest struct {
	NextToken                   *string  `json:"NextToken"`
	RetentionConfigurationNames []string `json:"RetentionConfigurationNames"`
}
