package shared

type DescribeConfigurationAggregatorsRequest struct {
	ConfigurationAggregatorNames []string `json:"ConfigurationAggregatorNames,omitempty"`
	Limit                        *int64   `json:"Limit,omitempty"`
	NextToken                    *string  `json:"NextToken,omitempty"`
}
