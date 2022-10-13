package shared

type ResourceCountFilters struct {
	AccountID    *string           `json:"AccountId"`
	Region       *string           `json:"Region"`
	ResourceType *ResourceTypeEnum `json:"ResourceType"`
}
