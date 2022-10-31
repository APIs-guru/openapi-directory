package shared

type OrganizationResourceDetailedStatusFilters struct {
	AccountID *string                                 `json:"AccountId,omitempty"`
	Status    *OrganizationResourceDetailedStatusEnum `json:"Status,omitempty"`
}
