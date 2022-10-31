package shared

type ResourceCountFilters struct {
	AccountID    *string           `json:"AccountId,omitempty"`
	Region       *string           `json:"Region,omitempty"`
	ResourceType *ResourceTypeEnum `json:"ResourceType,omitempty"`
}
