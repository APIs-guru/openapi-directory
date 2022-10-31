package shared



type BatchGetAggregateResourceConfigRequest struct {
    ConfigurationAggregatorName string `json:"ConfigurationAggregatorName"`
    ResourceIdentifiers []AggregateResourceIdentifier `json:"ResourceIdentifiers"`
    
}

