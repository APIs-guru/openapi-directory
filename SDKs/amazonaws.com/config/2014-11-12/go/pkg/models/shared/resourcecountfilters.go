package shared

// ResourceCountFilters
// Filters the resource count based on account ID, region, and resource type.
type ResourceCountFilters struct {
	AccountID    *string           `json:"AccountId,omitempty"`
	Region       *string           `json:"Region,omitempty"`
	ResourceType *ResourceTypeEnum `json:"ResourceType,omitempty"`
}
