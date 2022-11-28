package shared

// OrganizationResourceDetailedStatusFilters
// Status filter object to filter results based on specific member account ID or status type for an organization conformance pack.
type OrganizationResourceDetailedStatusFilters struct {
	AccountID *string                                 `json:"AccountId,omitempty"`
	Status    *OrganizationResourceDetailedStatusEnum `json:"Status,omitempty"`
}
