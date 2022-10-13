package shared

type BatchGetAggregateResourceConfigResponse struct {
	BaseConfigurationItems         []BaseConfigurationItem       `json:"BaseConfigurationItems"`
	UnprocessedResourceIdentifiers []AggregateResourceIdentifier `json:"UnprocessedResourceIdentifiers"`
}
