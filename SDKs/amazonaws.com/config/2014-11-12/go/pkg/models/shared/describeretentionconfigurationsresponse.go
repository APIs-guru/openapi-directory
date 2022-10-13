package shared

type DescribeRetentionConfigurationsResponse struct {
	NextToken               *string                  `json:"NextToken"`
	RetentionConfigurations []RetentionConfiguration `json:"RetentionConfigurations"`
}
