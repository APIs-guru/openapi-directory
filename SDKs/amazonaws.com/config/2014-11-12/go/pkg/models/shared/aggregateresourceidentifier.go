package shared

// AggregateResourceIdentifier
// The details that identify a resource that is collected by Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region.
type AggregateResourceIdentifier struct {
	ResourceID      string           `json:"ResourceId"`
	ResourceName    *string          `json:"ResourceName,omitempty"`
	ResourceType    ResourceTypeEnum `json:"ResourceType"`
	SourceAccountID string           `json:"SourceAccountId"`
	SourceRegion    string           `json:"SourceRegion"`
}
