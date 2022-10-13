package shared

type DescribeConfigurationAggregatorsRequest struct {
	ConfigurationAggregatorNames []string `json:"ConfigurationAggregatorNames"`
	Limit                        *int64   `json:"Limit"`
	NextToken                    *string  `json:"NextToken"`
}
