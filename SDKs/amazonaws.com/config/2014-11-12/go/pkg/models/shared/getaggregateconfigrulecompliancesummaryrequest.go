package shared

type GetAggregateConfigRuleComplianceSummaryRequest struct {
	ConfigurationAggregatorName string                                   `json:"ConfigurationAggregatorName"`
	Filters                     *ConfigRuleComplianceSummaryFilters      `json:"Filters,omitempty"`
	GroupByKey                  *ConfigRuleComplianceSummaryGroupKeyEnum `json:"GroupByKey,omitempty"`
	Limit                       *int64                                   `json:"Limit,omitempty"`
	NextToken                   *string                                  `json:"NextToken,omitempty"`
}
