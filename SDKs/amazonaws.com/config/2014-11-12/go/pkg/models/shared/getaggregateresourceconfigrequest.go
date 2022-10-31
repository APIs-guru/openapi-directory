package shared

type GetAggregateResourceConfigRequest struct {
	ConfigurationAggregatorName string                      `json:"ConfigurationAggregatorName"`
	ResourceIdentifier          AggregateResourceIdentifier `json:"ResourceIdentifier"`
}
