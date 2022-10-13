package shared

type SelectAggregateResourceConfigRequest struct {
	ConfigurationAggregatorName string  `json:"ConfigurationAggregatorName"`
	Expression                  string  `json:"Expression"`
	Limit                       *int64  `json:"Limit"`
	MaxResults                  *int64  `json:"MaxResults"`
	NextToken                   *string `json:"NextToken"`
}
