package shared

type BatchGetAggregateResourceConfigResponse struct {
	BaseConfigurationItems         []BaseConfigurationItem       `json:"BaseConfigurationItems,omitempty"`
	UnprocessedResourceIdentifiers []AggregateResourceIdentifier `json:"UnprocessedResourceIdentifiers,omitempty"`
}
