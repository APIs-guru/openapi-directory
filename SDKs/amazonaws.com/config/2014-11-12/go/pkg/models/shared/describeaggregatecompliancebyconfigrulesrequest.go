package shared

type DescribeAggregateComplianceByConfigRulesRequest struct {
	ConfigurationAggregatorName string                       `json:"ConfigurationAggregatorName"`
	Filters                     *ConfigRuleComplianceFilters `json:"Filters"`
	Limit                       *int64                       `json:"Limit"`
	NextToken                   *string                      `json:"NextToken"`
}
