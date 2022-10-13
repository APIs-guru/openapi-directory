package shared

type GetAggregateConfigRuleComplianceSummaryRequest struct {
	ConfigurationAggregatorName string                                   `json:"ConfigurationAggregatorName"`
	Filters                     *ConfigRuleComplianceSummaryFilters      `json:"Filters"`
	GroupByKey                  *ConfigRuleComplianceSummaryGroupKeyEnum `json:"GroupByKey"`
	Limit                       *int64                                   `json:"Limit"`
	NextToken                   *string                                  `json:"NextToken"`
}
