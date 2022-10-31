package shared

type SelectAggregateResourceConfigRequest struct {
	ConfigurationAggregatorName string  `json:"ConfigurationAggregatorName"`
	Expression                  string  `json:"Expression"`
	Limit                       *int64  `json:"Limit,omitempty"`
	MaxResults                  *int64  `json:"MaxResults,omitempty"`
	NextToken                   *string `json:"NextToken,omitempty"`
}
