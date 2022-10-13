package shared

type ResourceFilters struct {
	AccountID    *string `json:"AccountId"`
	Region       *string `json:"Region"`
	ResourceID   *string `json:"ResourceId"`
	ResourceName *string `json:"ResourceName"`
}
