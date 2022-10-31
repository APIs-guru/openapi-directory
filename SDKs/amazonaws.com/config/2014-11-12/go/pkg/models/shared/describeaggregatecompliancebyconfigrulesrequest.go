package shared

type DescribeAggregateComplianceByConfigRulesRequest struct {
	ConfigurationAggregatorName string                       `json:"ConfigurationAggregatorName"`
	Filters                     *ConfigRuleComplianceFilters `json:"Filters,omitempty"`
	Limit                       *int64                       `json:"Limit,omitempty"`
	NextToken                   *string                      `json:"NextToken,omitempty"`
}
