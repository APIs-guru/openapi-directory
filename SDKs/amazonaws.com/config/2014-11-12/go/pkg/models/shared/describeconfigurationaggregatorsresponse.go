package shared

type DescribeConfigurationAggregatorsResponse struct {
	ConfigurationAggregators []ConfigurationAggregator `json:"ConfigurationAggregators"`
	NextToken                *string                   `json:"NextToken"`
}
