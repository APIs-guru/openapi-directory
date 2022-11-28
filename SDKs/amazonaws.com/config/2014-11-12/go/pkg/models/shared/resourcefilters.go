package shared

// ResourceFilters
// Filters the results by resource account ID, region, resource ID, and resource name.
type ResourceFilters struct {
	AccountID    *string `json:"AccountId,omitempty"`
	Region       *string `json:"Region,omitempty"`
	ResourceID   *string `json:"ResourceId,omitempty"`
	ResourceName *string `json:"ResourceName,omitempty"`
}
