package shared

type AggregateResourceIdentifier struct {
	ResourceID      string           `json:"ResourceId"`
	ResourceName    *string          `json:"ResourceName,omitempty"`
	ResourceType    ResourceTypeEnum `json:"ResourceType"`
	SourceAccountID string           `json:"SourceAccountId"`
	SourceRegion    string           `json:"SourceRegion"`
}
