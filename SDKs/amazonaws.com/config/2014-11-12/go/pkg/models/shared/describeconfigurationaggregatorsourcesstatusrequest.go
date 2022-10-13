package shared

type DescribeConfigurationAggregatorSourcesStatusRequest struct {
	ConfigurationAggregatorName string                           `json:"ConfigurationAggregatorName"`
	Limit                       *int64                           `json:"Limit"`
	NextToken                   *string                          `json:"NextToken"`
	UpdateStatus                []AggregatedSourceStatusTypeEnum `json:"UpdateStatus"`
}
