package shared

type DescribeConfigurationAggregatorSourcesStatusResponse struct {
	AggregatedSourceStatusList []AggregatedSourceStatus `json:"AggregatedSourceStatusList,omitempty"`
	NextToken                  *string                  `json:"NextToken,omitempty"`
}
