package shared

type DescribeConfigurationAggregatorSourcesStatusResponse struct {
	AggregatedSourceStatusList []AggregatedSourceStatus `json:"AggregatedSourceStatusList"`
	NextToken                  *string                  `json:"NextToken"`
}
