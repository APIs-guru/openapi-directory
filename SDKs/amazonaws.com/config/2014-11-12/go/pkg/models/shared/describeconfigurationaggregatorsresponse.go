package shared



type DescribeConfigurationAggregatorsResponse struct {
    ConfigurationAggregators []ConfigurationAggregator `json:"ConfigurationAggregators,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

