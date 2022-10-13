package shared

type ListAggregateDiscoveredResourcesResponse struct {
	NextToken           *string                       `json:"NextToken"`
	ResourceIdentifiers []AggregateResourceIdentifier `json:"ResourceIdentifiers"`
}
